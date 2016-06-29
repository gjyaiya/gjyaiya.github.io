function load_goto(){
    //返回顶部
	$(window).scroll(function(){
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if( scrollt >200 ){
			$("#gotop").fadeIn(400);
		}else{
			$("#gotop").stop().fadeOut(400);
		}
	});
	$("#gotop").click(function(){
		$("html,body").animate({scrollTop:"0px"},200);
	});
}

function auto_content_height(){
    //content高度>=sidebar
    if($("#content").height() < $("#sidebar").height()){
        $("#content").css("height",$("#sidebar").height())
    }
}

function colored_tags(){
    //tags random color
    var t = ["label-info", "label-primary", "label-success", "label-warning"]
    $(".tags").each(function () {
        $(this).addClass(t[Math.floor(Math.random()*4)]);
    });
}

function load_pager(pager) {
    //load_pager
    var count = pager.count;
    var pagesize = pager.pagesize;
    var page = pager.page;
    var pre = pager.pre;
	var last=Math.ceil(count/pagesize);
	var size=(last<5)?last:5;
	var add=(page<=3||last<=5)?0:(page-3);
	if((add!=0)&&((add+5)>last))add=last-5;
	var content="<ul class='pagination'><li><a href='"+pre+"'>&laquo;</a></li>";
	for(var i=add+1;i<=size+add;i++)
		if(i!=page)
			content+="<li><a href='"+pre+"page/"+i+"'>"+i+"</a></li>";
		else
			content+="<li class='active'><a href='"+pre+"page/"+i+"'>"+i+"</a></li>";
	content+="<li><a href='"+pre+"page/"+last+"'>&raquo;</a></li></ul>";
    $("#article_pager").html(content);
}

function toc_scroll() {
    //目录跟随
    var $sidebar = $("#sidebar_toc"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 0);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            }, 0);
        }
    });
}

//显示目录
function show_toc(toc_selector, wrap_id, min_nr) {
    var hlist = document.querySelectorAll(toc_selector);
    var wrap = document.getElementById(wrap_id);

    if (!wrap) return;

    if (!hlist || hlist.length <= min_nr) {
        wrap.style.display = 'none';
        return;
    }

    var ul = document.createElement('ul'), li, link;

    li = document.createElement('li');
    link = document.createElement('a');
    link.href = 'javascript:history.go(-1);';
    link.className = 'toc_link';
    link.innerHTML = "&middot;&nbsp;返回上一页";
    li.appendChild(link);
    ul.appendChild(li);

    for (i = 0; i < hlist.length; i++) {
        hlist[i].id = 'i_' + i;

        li = document.createElement('li');

        link = document.createElement('a');
        link.href = '#' + hlist[i].id;
        link.className = 'toc_link';
        link.innerHTML = hlist[i].innerHTML;

        li.appendChild(link);
        ul.appendChild(li);
    }
    wrap.appendChild(ul);
}

function toc_click_scroll() {
    //目录点击平滑跳转
    $(document).on('click', 'a[href*=#]', function(e) {
        if ((location.pathname.replace(/^\//, '') != this.pathname.replace(/^\//, ''))
            || (location.hostname != this.hostname))
            return true;

        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

        if ($target.length) {
            var targetOffset = $target.offset().top;

            $('html,body').animate({scrollTop: targetOffset}, 200);
            return false;
        }
    });
}
