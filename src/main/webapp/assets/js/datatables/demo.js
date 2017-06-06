+function ($) { "use strict";

  $(function(){

var data= [
  {
    "engine": "Trident",
    "browser": "Internet Explorer 4.0",
    "platform": "Win 95+",
    "version": "4",
    "grade": "X"
  },
  {
    "engine": "Trident",
    "browser": "Internet Explorer 5.0",
    "platform": "Win 95+",
    "version": "5",
    "grade": "C"
  },
  {
    "engine": "Trident",
    "browser": "Internet Explorer 5.5",
    "platform": "Win 95+",
    "version": "5.5",
    "grade": "A"
  },
  {
    "engine": "Trident",
    "browser": "Internet Explorer 6",
    "platform": "Win 98+",
    "version": "6",
    "grade": "A"
  },
  {
    "engine": "Trident",
    "browser": "Internet Explorer 7",
    "platform": "Win XP SP2+",
    "version": "7",
    "grade": "A"
  },
  {
    "engine": "Trident",
    "browser": "AOL browser (AOL desktop)",
    "platform": "Win XP",
    "version": "6",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Firefox 1.0",
    "platform": "Win 98+ / OSX.2+",
    "version": "1.7",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Firefox 1.5",
    "platform": "Win 98+ / OSX.2+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Firefox 2.0",
    "platform": "Win 98+ / OSX.2+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Firefox 3.0",
    "platform": "Win 2k+ / OSX.3+",
    "version": "1.9",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Camino 1.0",
    "platform": "OSX.2+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Camino 1.5",
    "platform": "OSX.3+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Netscape 7.2",
    "platform": "Win 95+ / Mac OS 8.6-9.2",
    "version": "1.7",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Netscape Browser 8",
    "platform": "Win 98SE+",
    "version": "1.7",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Netscape Navigator 9",
    "platform": "Win 98+ / OSX.2+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.0",
    "platform": "Win 95+ / OSX.1+",
    "version": "1",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.1",
    "platform": "Win 95+ / OSX.1+",
    "version": "1.1",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.2",
    "platform": "Win 95+ / OSX.1+",
    "version": "1.2",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.3",
    "platform": "Win 95+ / OSX.1+",
    "version": "1.3",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.4",
    "platform": "Win 95+ / OSX.1+",
    "version": "1.4",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.5",
    "platform": "Win 95+ / OSX.1+",
    "version": "1.5",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.6",
    "platform": "Win 95+ / OSX.1+",
    "version": "1.6",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.7",
    "platform": "Win 98+ / OSX.1+",
    "version": "1.7",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Mozilla 1.8",
    "platform": "Win 98+ / OSX.1+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Seamonkey 1.1",
    "platform": "Win 98+ / OSX.2+",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Gecko",
    "browser": "Epiphany 2.20",
    "platform": "Gnome",
    "version": "1.8",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "Safari 1.2",
    "platform": "OSX.3",
    "version": "125.5",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "Safari 1.3",
    "platform": "OSX.3",
    "version": "312.8",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "Safari 2.0",
    "platform": "OSX.4+",
    "version": "419.3",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "Safari 3.0",
    "platform": "OSX.4+",
    "version": "522.1",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "OmniWeb 5.5",
    "platform": "OSX.4+",
    "version": "420",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "iPod Touch / iPhone",
    "platform": "iPod",
    "version": "420.1",
    "grade": "A"
  },
  {
    "engine": "Webkit",
    "browser": "S60",
    "platform": "S60",
    "version": "413",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 7.0",
    "platform": "Win 95+ / OSX.1+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 7.5",
    "platform": "Win 95+ / OSX.2+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 8.0",
    "platform": "Win 95+ / OSX.2+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 8.5",
    "platform": "Win 95+ / OSX.2+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 9.0",
    "platform": "Win 95+ / OSX.3+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 9.2",
    "platform": "Win 88+ / OSX.3+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera 9.5",
    "platform": "Win 88+ / OSX.3+",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Opera for Wii",
    "platform": "Wii",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Nokia N800",
    "platform": "N800",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Presto",
    "browser": "Nintendo DS browser",
    "platform": "Nintendo DS",
    "version": "8.5",
    "grade": "C/A<sup>1</sup>"
  },
  {
    "engine": "KHTML",
    "browser": "Konqureror 3.1",
    "platform": "KDE 3.1",
    "version": "3.1",
    "grade": "C"
  },
  {
    "engine": "KHTML",
    "browser": "Konqureror 3.3",
    "platform": "KDE 3.3",
    "version": "3.3",
    "grade": "A"
  },
  {
    "engine": "KHTML",
    "browser": "Konqureror 3.5",
    "platform": "KDE 3.5",
    "version": "3.5",
    "grade": "A"
  },
  {
    "engine": "Tasman",
    "browser": "Internet Explorer 4.5",
    "platform": "Mac OS 8-9",
    "version": "-",
    "grade": "X"
  },
  {
    "engine": "Tasman",
    "browser": "Internet Explorer 5.1",
    "platform": "Mac OS 7.6-9",
    "version": "1",
    "grade": "C"
  },
  {
    "engine": "Tasman",
    "browser": "Internet Explorer 5.2",
    "platform": "Mac OS 8-X",
    "version": "1",
    "grade": "C"
  },
  {
    "engine": "Misc",
    "browser": "NetFront 3.1",
    "platform": "Embedded devices",
    "version": "-",
    "grade": "C"
  },
  {
    "engine": "Misc",
    "browser": "NetFront 3.4",
    "platform": "Embedded devices",
    "version": "-",
    "grade": "A"
  },
  {
    "engine": "Misc",
    "browser": "Dillo 0.8",
    "platform": "Embedded devices",
    "version": "-",
    "grade": "X"
  },
  {
    "engine": "Misc",
    "browser": "Links",
    "platform": "Text only",
    "version": "-",
    "grade": "X"
  },
  {
    "engine": "Misc",
    "browser": "Lynx",
    "platform": "Text only",
    "version": "-",
    "grade": "X"
  },
  {
    "engine": "Misc",
    "browser": "IE Mobile",
    "platform": "Windows Mobile 6",
    "version": "-",
    "grade": "C"
  },
  {
    "engine": "Misc",
    "browser": "PSP browser",
    "platform": "PSP",
    "version": "-",
    "grade": "C"
  },
  {
    "engine": "Other browsers",
    "browser": "All others",
    "platform": "-",
    "version": "-",
    "grade": "U"
  }
];

  // datatable
  $('[data-ride="datatables"]').each(function() {
    var oTable = $(this).dataTable( {
      "searching": false,
      //"bProcessing": true,
      //"sAjaxSource": "js/datatables/datatable.json",
      "data": data,
      "sDom": "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
      "sPaginationType": "full_numbers",
      "aoColumns": [
        { "mData": "engine" },
        { "mData": "browser" },
        { "mData": "platform" },
        { "mData": "version" },
        { "mData": "grade" }
      ],
       "columnDefs": [{
            "render": function(data, type, row) {
                return "<a href='/' class='text-center text-lg'>"+data+"</a> <br/> <small>公司 北京波巴布</small>";
            },
            "targets": 0
      }],
      "language": {
        "sProcessing": "处理中...",
        "sLengthMenu": "显示 _MENU_ 项结果",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    }
    } );
  });

  });
}(window.jQuery);