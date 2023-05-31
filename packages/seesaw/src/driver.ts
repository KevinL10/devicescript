import { I2CDriver, I2CDriverError, I2CDriverOptions } from "@devicescript/i2c"
import { GPIOMode, InputPin, sleep } from "@devicescript/core"
import "@devicescript/gpio"

export const SEESAW_ADDRESS = 0x49
const _STATUS_BASE = 0x00
const _GPIO_BASE = 0x01
const _SERCOM0_BASE = 0x02
const _TIMER_BASE = 0x08
const _ADC_BASE = 0x09
const _DAC_BASE = 0x0a
const _INTERRUPT_BASE = 0x0b
const _DAP_BASE = 0x0c
const _EEPROM_BASE = 0x0d
const _NEOPIXEL_BASE = 0x0e
const _TOUCH_BASE = 0x0f
const _GPIO_DIRSET_BULK = 0x02
const _GPIO_DIRCLR_BULK = 0x03
const _GPIO_BULK = 0x04
const _GPIO_BULK_SET = 0x05
const _GPIO_BULK_CLR = 0x06
const _GPIO_BULK_TOGGLE = 0x07
const _GPIO_INTENSET = 0x08
const _GPIO_INTENCLR = 0x09
const _GPIO_INTFLAG = 0x0a
const _GPIO_PULLENSET = 0x0b
const _GPIO_PULLENCLR = 0x0c
const _STATUS_HW_ID = 0x01
const _STATUS_VERSION = 0x02
const _STATUS_OPTIONS = 0x03
const _STATUS_TEMP = 0x04
const _STATUS_SWRST = 0x7f
const _TIMER_STATUS = 0x00
const _TIMER_PWM = 0x01
const _TIMER_FREQ = 0x02
const _ADC_STATUS = 0x00
const _ADC_INTEN = 0x02
const _ADC_INTENCLR = 0x03
const _ADC_WINMODE = 0x04
const _ADC_WINTHRESH = 0x05
const _ADC_CHANNEL_OFFSET = 0x07
const _SERCOM_STATUS = 0x00
const _SERCOM_INTEN = 0x02
const _SERCOM_INTENCLR = 0x03
const _SERCOM_BAUD = 0x04
const _SERCOM_DATA = 0x05
const _NEOPIXEL_STATUS = 0x00
const _NEOPIXEL_PIN = 0x01
const _NEOPIXEL_SPEED = 0x02
const _NEOPIXEL_BUF_LENGTH = 0x03
const _NEOPIXEL_BUF = 0x04
const _NEOPIXEL_SHOW = 0x05
const _TOUCH_CHANNEL_OFFSET = 0x10
const _HW_ID_CODE = 0x55
const _EEPROM_I2C_ADDR = 0x3f
const ADC_INPUT_0_PIN = 2 ///< default ADC input pin
const ADC_INPUT_1_PIN = 3 ///< default ADC input pin
const ADC_INPUT_2_PIN = 4 ///< default ADC input pin
const ADC_INPUT_3_PIN = 5 ///< default ADC input pin

const PWM_0_PIN = 4 ///< default PWM output pin
const PWM_1_PIN = 5 ///< default PWM output pin
const PWM_2_PIN = 6 ///< default PWM output pin
const PWM_3_PIN = 7 ///< default PWM output pin

const _HW_ID_CODE_SAMD09 = 0x55 ///< seesaw HW ID code for SAMD09
const _HW_ID_CODE_TINY8X7 = 0x87 ///< seesaw HW ID code for ATtiny817

export const INPUT = 0x00
export const OUTPUT = 0x01
export const INPUT_PULLUP = 0x02
export const INPUT_PULLDOWN = 0x03

export interface SeesawDriverOptions {
    driver?: I2CDriver
    flow?: InputPin
    reset?: boolean
}

/**
 * Adafruit Seesaw protocol driver.
 * @link from https://github.com/adafruit/Adafruit_Seesaw/blob/master/Adafruit_seesaw.cpp
 */
export class SeesawDriver {
    readonly driver: I2CDriver
    private readonly _flow?: InputPin
    private readonly _reset?: boolean

    private _hardwareID: number

    /**
     * Instantiates a new seesaw driver
     * @param options
     */
    constructor(options?: SeesawDriverOptions) {
        this.driver = options?.driver || new I2CDriver(SEESAW_ADDRESS)
        this._flow = options?.flow
        this._reset = !!options?.reset
    }

    /**
     * Initializes the seesaw connection
     */
    async init(): Promise<void> {
        await this.driver.init()

        if (this._reset) {
            await this.softwareReset()
            await this.driver.init()
        }

        if (this._flow) await this._flow.setMode(GPIOMode.Input)

        this._hardwareID = await this.read8(_STATUS_BASE, _STATUS_HW_ID)
    }

    /**
     * Triggers a software reset of the seesaw chip
     */
    private async softwareReset() {
        await this.write8(_STATUS_BASE, _STATUS_SWRST, 0xff)
    }

    /**
     * Readfs the hardware id
     * @returns
     */
    public hardwareID() {
        return this._hardwareID
    }

    /**
     * Returns the available options compiled into the seesaw firmware.
     *  @return     the available options compiled into the seesaw firmware. If the
     * option is included, the corresponding bit is set. For example, if the ADC
     * module is compiled in then (ss.getOptions() & (1UL << SEESAW_ADC_BASE)) > 0
     */
    public async options(): Promise<number> {
        const buf = Buffer.alloc(4)
        await this.read(_STATUS_BASE, _STATUS_OPTIONS, buf)
        return buf.getAt(0, "u32")
    }

    /**
     * Returns the version of the seesaw
     *  @return The version code. Bits [31:16] will be a date code, [15:0] will
     * be the product id.
     */
    public async version(): Promise<number> {
        const buf = Buffer.alloc(4)
        await this.read(_STATUS_BASE, _STATUS_VERSION, buf)
        return buf.getAt(0, "u32")
    }

    /**
     * Write 1 byte to the specified seesaw register.
     * @param regHigh the module address register (ex. SEESAW_NEOPIXEL_BASE)
     * @param regLow the function address register (ex. SEESAW_NEOPIXEL_PIN)
     * @param value value the value between 0 and 255 to write
     */
    public async write8(
        regHigh: number,
        regLow: number,
        value: number
    ): Promise<void> {
        const buf = Buffer.alloc(1)
        buf[0] = value
        await this.write(regHigh, regLow, buf)
    }

    /**
     * Write 1 byte to the specified seesaw register.
     * @param regHigh the module address register (ex. SEESAW_NEOPIXEL_BASE)
     * @param regLow the function address register (ex. SEESAW_NEOPIXEL_PIN)
     * @param buf buffer to send
     */
    public async write(regHigh: number, regLow: number, buf: Buffer) {
        const fullBuf = Buffer.alloc(2 + buf.length)
        fullBuf[0] = regHigh
        fullBuf[1] = regLow
        fullBuf.blitAt(2, buf, 0, buf.length)

        await this.waitFlowReady()
        await this.driver.xfer(fullBuf, 0)
    }

    /**
     * Read 1 byte from the specified seesaw register.
     * @param regHigh the module address register (ex. SEESAW_STATUS_BASE)
     * @param regLow the function address register (ex. SEESAW_STATUS_VERSION)
     * @param delayUs a number of microseconds to delay before reading out the data. Different delay values may be necessary to ensure the seesaw chip has time to process the requested data. Defaults to 125.
     * @return the value between 0 and 255 read from the passed register
     */
    public async read8(
        regHigh: number,
        regLow: number,
        delayUs?: number
    ): Promise<number> {
        const ret = Buffer.alloc(1)
        await this.read(regHigh, regLow, ret, delayUs)
        return ret[0]
    }

    /**
     * Reads a buffer from the seesaw.
     * @param regHigh the module address register (ex. SEESAW_STATUS_BASE)
     * @param regLow the function address register (ex. SEESAW_STATUS_VERSION)
     * @param buf buffer to read into
     * @param num number of bytes to read. Default is length of buf.
     * @param delayUs a number of microseconds to delay before reading out the data. Different delay values may be necessary to ensure the seesaw chip has time to process the requested data. Defaults to 125.
     * @return number of bytes read
     */
    public async read(
        regHigh: number,
        regLow: number,
        buf: Buffer,
        num?: number,
        delay?: number
    ) {
        // defaults
        if (num === undefined) num = buf.length
        if (delay === undefined) delay = 125
        if (num <= 0) return 0

        await this.waitFlowReady()
        await this.write(regHigh, regLow, Buffer.alloc(0))
        if (delay > 0) await sleep(delay / 1000) // todo: delayUs
        await this.waitFlowReady()

        const res = await this.driver.readBuf(num)
        buf.blitAt(0, res, 0, res.length)

        return res.length
    }

    private async waitFlowReady() {
        if (this._flow) while (!(await this._flow.read())) await sleep(0)
    }

    /**
     * Enable or disable GPIO interrupts on the passed pins
     * @param pins a bitmask of the pins to write. On the SAMD09 breakout, this corresponds to the number on the silkscreen. For example, passing 0b0110 will enable or disable interrups on pins 2 and 3.
     * @param enabled pass true to enable the interrupts on the passed pins, false to disable the interrupts on the passed pins.
     */
    async setGPIOInterrupts(pins: number, enabled: boolean) {
        const cmd = Buffer.from([pins >> 24, pins >> 16, pins >> 8, pins])
        const regLow = enabled ? _GPIO_INTENSET : _GPIO_INTENCLR
        await this.write(_GPIO_BASE, regLow, cmd)
    }

    /**
     * Read the analog value on an ADC-enabled pin.
     * @param pin the number of the pin to read. On the SAMD09 breakout, this corresponds to the number on the silkscreen. On the default seesaw firmware on the SAMD09 breakout, pins 2, 3, and 4 are ADC-enabled.
     * @return the analog value. This is an integer between 0 and 1023
     * @throws I2CDriverError if the pin is not ADC-enabled
     */
    async analogRead(pin: number) {
        const buf = Buffer.alloc(2)
        let p = 0

        if (this._hardwareID === _HW_ID_CODE_SAMD09) {
            switch (pin) {
                case ADC_INPUT_0_PIN:
                    p = 0
                    break
                case ADC_INPUT_1_PIN:
                    p = 1
                    break
                case ADC_INPUT_2_PIN:
                    p = 2
                    break
                case ADC_INPUT_3_PIN:
                    p = 3
                    break
                default:
                    return 0
            }
        } else if (this._hardwareID == _HW_ID_CODE_TINY8X7) {
            p = pin
        } else {
            throw new I2CDriverError("Unsupported hardware ID")
        }

        await this.read(_ADC_BASE, _ADC_CHANNEL_OFFSET + p, buf, 2, 500)
        const ret = ((buf[0] & 0xffff) << 8) | buf[1]
        sleep(1)
        return ret
    }

    /**
     * Read the analog value on an capacitive touch-enabled pin.
     *  @param  pin the number of the pin to read.
     *  @return the analog value. This is an integer between 0 and 1023
     */
    async touchRead(pin: number) {
        const buf = Buffer.alloc(2)
        let p = pin
        let ret = 65535

        for (let retry = 0; retry < 5; retry++) {
            if (
                await this.read(
                    _TOUCH_BASE,
                    _TOUCH_CHANNEL_OFFSET + p,
                    buf,
                    2,
                    3000 + retry * 1000
                )
            ) {
                ret = ((buf[0] & 0xffff) << 8) | buf[1]
                break
            }
        }
        return ret
    }
}
