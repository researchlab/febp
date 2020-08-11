import { QRCODE } from './constants';

export const setQrcode = (qrCode) => ({
    type: QRCODE,
    qrCode
})