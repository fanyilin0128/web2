$().ready(function(){
	var t1=false,t2=false,t3=false;
	var userName=$('input[name="username"]');
	var $error=$('<span style="color:red;">不能空</span>');
	$(userName).blur(function(){
		if(userName.val()==""){
			$("form td:eq(2)").append($error);
			t1=true;
		}	
	})
	$(userName).click(function(){
		if(t1)
		{
			$($error).remove();
			t1=false;
		}
	})
	var pswd1=$('input[name="password"]');
	var $error1=$('<span style="color:red;">不能空</span>');
	$(pswd1).blur(function(){
		if(pswd1.val()==""){
			$("form td:eq(4)").append($error1);
			t2=true;
		}
	})
	$(pswd1).click(function(){
		if(t2)
		{
			$($error1).remove();
			t2=false;
		}
	})
});
$().ready(function(){
	var intr1=$('<p style="text-indent:2em;color:#888888;">根据安德烈·艾席蒙同名小说改编的《请以你的名字呼唤我》，发生在80年代意大利的里维埃拉。突如其来的爱彷佛林中奔出的兽，攫住17岁少年Elio的身与心。他爱上的人大他7岁，是一位来意大利游历的美国大学生。 两人对彼此的着迷、犹疑、试探，让情欲在流动中迸发，成就了一段仅仅 为时六周的初恋。它给男孩留下一生的印记，因为他们在闷热仲夏夜里发现的，是此生再也无法寻找到的东西：完整的、彻底的亲密。</p>')
	var intr2=$('<p style="text-indent:2em;color:#888888;">该片讲述的是上世纪九十年代某个小城，天气预报中一场百年不遇的暴雪即将侵袭此地，人心惶惶时骤然发生了一起残忍的连环杀人案。一心想进入体制内的保卫科干事余国伟（段奕宏饰）渴望借此机会，一展自己颇为得意的“神探”技能，并破格进入体制内成为真正的警察及模范。面对“探案”欲望与燕子（江一燕饰）的感情，余神探越陷越深，付出的代价也越来越大。然而宿命因果，万事皆有定数…</p>')
	var intr3=$('<p style="text-indent:2em;color:#888888;">故事改编自著名的二战军事事件“敦刻尔克大撤退”。二战初期，40万英法盟军被敌军围困于敦刻尔克的海滩之上，面对敌军步步逼近的绝境，形势万分危急。英国政府和海军发动大批船员，动员人民起来营救军队。 英国士兵汤米在逃离海滩的过程中相继结识吉布森与亚历克斯，同时民用船主道森先生与儿子彼得也离开英国，去往敦刻尔克拯救士兵。三人陆续搭救了海军、飞行员柯林斯及汤米一行人，而战斗机飞行员法瑞尔则在被敌人双面夹击的艰难情形下顽强战斗。 </p>')
	var bt=$('#biaoti');
	$("#pic1").mouseover(function(){
		$(bt).remove();
		$('#introduce').append(intr1);
		$(this).addClass('piccolor');
	})
	$("#pic1").mouseout(function(){
		$(intr1).remove();
		$(this).removeClass();
		$('#introduce').append(bt);
	})
	$("#pic2").mouseover(function(){
		$(bt).remove();
		$('#introduce').append(intr2);
		$(this).addClass('piccolor');
	})
	$("#pic2").mouseout(function(){
		$(intr2).remove();
		$(this).removeClass();
		$('#introduce').append(bt);
	})
	$("#pic3").mouseover(function(){
		$(bt).remove();
		$('#introduce').append(intr3);
		$(this).addClass('piccolor');
	})
	$("#pic3").mouseout(function(){
		$(intr3).remove();
		$(this).removeClass();
		$('#introduce').append(bt);
	})
});
$().ready(function(){
	var liNodes = $("#nav li");
	for (var i=0; i<liNodes.length; i++)
	{
		liNodes[i].onmouseover = function(){
			this.className = "subMenuShow";
		}
		liNodes[i].onmouseout = function(){
			this.className = "";
		}
	}
		
});