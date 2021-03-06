var manager;
//var fenjianquId = window.parent;
//var id=$("input[name='postId']").val();
//console.log(id);
$(function () {
    var id = document.getElementById("postId").value;
    //console.log(id);
    window['g'] =
        manager = $("#maingrid").ligerGrid({
                columns: [
                    {display: '监区', name: 'jianqu',isSort:true, width: 300,minWidth: 300,type:'string', align: 'center'},
                    {display: '状态', name: 'state',minWidth: 300, align: 'center',isSort:false}
                    //{ display: '查看', name: 'show', width: 200, align: 'center',render:showRowData},
                    //}
                ],
                toolbar: {
                    items: [
                        {text: '查看', click: showItem, icon: 'add'},
                        {line: true}
                    ]
                },
                checkbox: false,
                fixedCellHeight: false,
                //pageSizeOptions: [10, 20, 50, 100],
                //pageSize: 20,
                url: '/api/jifenkaohe/yuzhengke/yuzhengkeshenhejianqu/' + id,
                height: '97%',
                width: '100%',
                record: 'total',
                dataAction: 'server', //服务器处理
                root: 'items',
                usePager: false,       //服务器分页
                alternatingRow: true,
                method: 'get',
                enabledSort:true,
                sortnameParmName:"jianqu",
                //pagesizeParmName: 'limit',
                switchPageSizeApplyComboBox: true,
                onBeforeShowData: function () {
                },
                onAfterShowdata: function () {
                },
                rowAttrRender: function (rowdata, rowid) {
                    if (rowdata.state == "录入中") {
                        return "style='color:gray;font-weight:bold'";
                    } else if (rowdata.state == "审核通过") {
                        return "style='color:green;font-weight:bold'";
                    } else if (rowdata.state == "等待审核") {
                        return "style='color:blue;font-weight:bold'";
                    } else if (rowdata.state == "审核未通过") {
                        return "style='color:red;font-weight:bold'";
                    }
                }
            }
        );
});
function reload() {
    manager.reload(1);
}
function getSelectedId() {
    var row = manager.getSelectedRow();
    if (!row) {
        alert('请先选择一行');
        return;
    }
    return row.jianquid;
}
function showItem() {
    var selectedId = getSelectedId();
    var row = manager.getSelectedRow();
    //console.log(selectedId);
    if (!selectedId) {
        return;
    }
    if (row.state=="录入中"){
        $.ligerDialog.waitting('正在录入中...');
        setTimeout(function () {
            $.ligerDialog.closeWaitting();
        }, 2000);
    }else {
        $.ligerDialog.open({
            height: 500,
            width: 800,
            title: '查看状态',
            url: '/jifenkaohe/yuzhengke/shangbaoshujushenhe/show',
            showMax: true,
            showToggle: true,
            showMin: false,
            isResize: true,
            slide: false,
            data: {
                id: selectedId
            }
        })
    }

}

