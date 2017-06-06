<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en" class="app">
<head>
    <meta charset="utf-8"/>
    <title>京东金融接口说明文档</title>
    <jsp:include page="/WEB-INF/views/commons/header.jsp"/>
</head>
<body class="">
  <section class="vbox">
    <header class="bg-primary header header-md navbar navbar-fixed-top-xs">
      <div class="navbar-header aside">
        <a class="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
          <i class="icon-list"></i>
        </a>
        <a href="index.html" class="navbar-brand text-lt">
          <i class="fa-vimeo-square fa"></i>
          <span class="hidden-nav-xs m-l-sm">蓝策</span>
        </a>
        <a class="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
          <i class="icon-settings"></i>
        </a>
      </div>
	  <ul class="nav navbar-nav hidden-xs">
        <li>
          <a href="#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" class="text-muted">
            <i class="fa fa-indent text"></i>
            <i class="fa fa-dedent text-active"></i>
          </a>
        </li>
      </ul>
      <form class="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-btn">
              <button type="submit" class="btn btn-sm bg-white btn-icon rounded"><i class="fa fa-search"></i></button>
            </span>
            <input type="text" class="form-control input-sm no-border rounded" placeholder="搜索">
          </div>
        </div>
      </form>
      <div class="navbar-right ">
        <ul class="nav navbar-nav m-n hidden-xs nav-user user">
		<li class="hidden-xs">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="icon-grid"></i>
            </a>
          </li>
          <li class="hidden-xs">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="icon-bell"></i>
              <span class="badge badge-sm up bg-danger count">2</span>
            </a>
            <section class="dropdown-menu aside-xl animated fadeInUp">
              <section class="panel bg-white">
                <div class="panel-heading b-light bg-light">
                  <strong>有 <span class="count">2</span> 条未读消息</strong>
                </div>
                <div class="list-group list-group-alt">
                  <a href="#" class="media list-group-item">
                    <span class="pull-left thumb-sm">
                      <img src="images/a0.png" alt="..." class="img-circle">
                    </span>
                    <span class="media-body block m-b-none">
                      合同审核申请<br>
                      <small class="text-muted">10 分钟以前</small>
                    </span>
                  </a>
                  <a href="#" class="media list-group-item">
                    <span class="media-body block m-b-none">
                      张三上传了合同文件<br>
                      <small class="text-muted">1 小时前</small>
                    </span>
                  </a>
                </div>
                <div class="panel-footer text-sm">
                  <a href="#notes" data-toggle="class:show animated fadeInRight">查看所有消息</a>
                </div>
              </section>
            </section>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="images/m0.jpg" alt="...">
              </span>
              图形控制 <b class="caret"></b>
            </a>
            <ul class="dropdown-menu animated fadeInRight">
              <li>
                <span class="arrow top"></span>
                <a href="#">个人资料</a>
              </li>
              <li>
                <a href="profile.html">修改密码</a>
              </li>
              <li>
                <a href="docs.html">帮助文档</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="modal.lockme.html" data-toggle="ajaxModal" >退出</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <section>
      <section class="hbox stretch">
        <!-- .aside -->
        <aside class="bg-inverse aside hidden-print" id="nav">
          <section class="vbox">
            <section class="scrollable">
              <div class="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">

                <!-- nav -->
                <nav class="nav-primary hidden-xs">
                  <ul class="nav bg clearfix">
                    <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                      项目
                    </li>
					<li>
                      <a href="index.html">
                        <i class="fa-dashboard fa"></i>
                        <span class="font-bold">控制面板</span>
                      </a>
                    </li>
                    <li class="m-b hidden-nav-xs"></li>
                  </ul>
                  <ul class="nav" data-ride="collapse">
                    <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                      项目评估
                    </li>
					<li>
                      <a href="#" class="auto">
						<span class="pull-right text-muted">
                          <i class="fa fa-angle-left text"></i>
                          <i class="fa fa-angle-down text-active"></i>
                        </span>
                        <i class="icon-user icon"></i>
                        <span>客户管理</span>
                      </a>
                      <ul class="nav dk text-sm">
                        <li  class="active">
                          <a href="layout-color.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>客户管理</span>
                          </a>
                        </li>
                        <li >
                          <a href="layout-boxed.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>潜在客户管理</span>
                          </a>
                        </li>
                        <li >
                          <a href="layout-fluid.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>友商管理</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" class="auto">
                        <span class="pull-right text-muted">
                          <i class="fa fa-angle-left text"></i>
                          <i class="fa fa-angle-down text-active"></i>
                        </span>
                        <i class="icon-screen-desktop icon">
                        </i>
                        <span>项目管理</span>
                      </a>
                      <ul class="nav dk text-sm">
                        <li  class="active">
                          <a href="layout-color.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>

                            <span>立项管理</span>
                          </a>
                        </li>
                        <li >
                          <a href="layout-boxed.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>项目列表</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li >
                      <a href="#" class="auto">
                        <span class="pull-right text-muted">
                          <i class="fa fa-angle-left text"></i>
                          <i class="fa fa-angle-down text-active"></i>
                        </span>
                        <i class="icon-folder-alt icon">
                        </i>
                        <span>文档管理</span>
                      </a>
                      <ul class="nav dk text-sm">
                        <li >
                          <a href="buttons.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>文档模板</span>
                          </a>
                        </li>
                        <li >
                          <a href="icons.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>报价函和保密函</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li >
                      <a href="#" class="auto">
                        <span class="pull-right text-muted">
                          <i class="fa fa-angle-left text"></i>
                          <i class="fa fa-angle-down text-active"></i>
                        </span>
                        <i class="fa-tasks fa">
                        </i>
                        <span>任务管理</span>
                      </a>
                      <ul class="nav dk text-sm">
                        <li >
                          <a href="profile.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>待办任务</span>
                          </a>
                        </li>
                        <li >
                          <a href="blog.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>已办任务</span>
                          </a>
                        </li>
                        <li >
                          <a href="invoice.html" class="auto">
                            <i class="fa fa-angle-right text-xs"></i>
                            <span>任务历史</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
				  <ul class="nav text-sm">
                    <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                      数据
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-pie-chart icon"></i>
                        <span>收款统计</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-speedometer icon"></i>
                        <span>工作统计</span>
                      </a>
                    </li>
                  </ul>
				  <ul class="nav text-sm">
                    <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                      财务
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-dollar fa"></i>
                        <span>收款核实</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="nav text-sm">
                    <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                      <span class="pull-right"><a href="#"><i class="icon-plus i-lg"></i></a></span>
                      系统
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-equalizer icon"></i>
                        <span>受托方</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-lock icon"></i>
                        <span>权限管理</span>
                      </a>
                    </li>
					 <li>
                      <a href="#">
                        <i class="icon-settings"></i>
                        <span>系统设置</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <!-- / nav -->
              </div>
            </section>
          </section>
        </aside>
        <!-- /.aside -->
        <section id="content">
          <section class="vbox">
            <section class="scrollable wrapper bg-white-only">
              <p class="h4">Contents...</p>
            </section>
          </section>
          <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
        </section>
      </section>
    </section>
  </section>

<!-- footer -->
<script src="${pageContext.servletContext.contextPath}/assets/js/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="${pageContext.servletContext.contextPath}/assets/js/bootstrap.js"></script>
<!-- App -->
<script src="${pageContext.servletContext.contextPath}/assets/js/app.js"></script>
<script src="${pageContext.servletContext.contextPath}/assets/js/slimscroll/jquery.slimscroll.min.js"></script>
<script src="${pageContext.servletContext.contextPath}/assets/js/app.plugin.js"></script>

</body>
</html>