
/**
 * flexigrid list 
 */
$(function() {
	findAllTobeShippedOrderMobileHavapay=function(){
		$("#mobiletobeshippedordershavepaymanagement").flexigrid({
			url : 'findAllTobeShippedOrderMobileHavapay.action',
			dataType : 'json',
			cache : false,
			colModel : [{ 
				display:'订单编号',
				name:'orderid',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'订单名称',
				name:'ordername',
				width:200,
				sortable:true,
				align:'center'
			},{
				display:'总金额',
				name:'amount',
				width:80,
				sortable:true,
				align:'center'
			},{
				display:'总件数',
				name:'needquantity',
				width:50,
				sortable:true,
				align:'center'
			},{
				display:'订单购买人',
				name:'membername',
				width:150,
				sortable:true,
				align:'center'
			},{
				display:'收货人',
				name:'shippingusername',
				width:150,
				sortable:true,
				align:'center'
			},{
				display:'支付方式',
				name:'paymentname',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'配送方式',
				name:'delivermode',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'订单状态',
				name:'orderstate',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'支付状态',
				name:'paystate',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'发货状态',
				name:'shippingstate',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'下单时间',
				name:'purchasetime',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'发货时间',
				name:'deliverytime',
				width:150,
				sortable:true,
				align:'center'
			},{
				display:'订单来源',
				name:'orderTag',
				width:100,
				sortable:true,
				align:'center'
			},{
				display:'开票',
				name:'invoice',
				width:100,
				sortable:true,
				align:'center'		
			}],
			buttons : [{
				separator : true
			} ],

			searchitems : [{
				display:'请选择搜索条件',
				name:'sc',
				isdefault : true
			},{
				display:'订单编号',
				name:'orderid'
			},{
				display:'收件人',
				name:'shippingusername'
			} ],
			sortname : "createtime",
			sortorder : "desc",
			usepager : true,
			title : '',
			useRp : true,
			rp : 20,
			rpOptions : [ 5, 20, 40, 100 ],
			showTableToggleBtn : true,
			width :'auto',
			height :'auto',
			pagestat : '显示{from}到{to}条，共{total}条记录',
			procmsg : '正在获取数据，请稍候...',
			checkbox:true
		});
	
	}
	
	
	/**
	 * main logic
	 */
	var operate = $.query.get("operate");
	if (operate == "add") {
	
	}else if(operate=="edit"){
	
	}else if(operate=="find"){
		findAllTobeShippedOrderMobileHavapay();
	}


});