class PaymentOrder{
    constructor(po_id,po_amount,po_message,po_datetime,ob_id,oa_id,ob_code,ob_datetime,cb_code,cb_datetime,bb_id,ba_id,bb_code,bb_datetime){
        this.po_id = po_id;
        this.po_amount = po_amount;
        this.po_message = po_message,
        this.po_datetime = po_datetime,
        this.ob_id = ob_id,
        this.oa_id = oa_id,
        this.ob_code = ob_code,
        this.ob_datetime = ob_datetime,
        this.cb_code = cb_code,
        this.cb_datetime = cb_datetime,
        this.bb_id = bb_id,
        this.ba_id = ba_id,
        this.bb_code = bb_code,
        this.bb_datetime = bb_datetime
    }
}