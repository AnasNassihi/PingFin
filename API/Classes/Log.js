class Log extends PaymentOrder{
    constructor(poId,poAmount,poMessage,poDatetime,obId,oaId,obCode,obDatetime,cbCode,cbDatetime,bbId,baId,bbCode,bbDatetime,id,datetime,message,type){
        super(poId,poAmount,poMessage,poDatetime,obId,oaId,obCode,obDatetime,cbCode,cbDatetime,bbId,baId,bbCode,bbDatetime);
        this.id = id,
        this.datetime = datetime,
        this.message = message,
        this.type = type
    }
}