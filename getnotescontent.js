function getnotescontent() {
    return `
    <html><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta property="qc:admins" content="465267610762567726375">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>笔记列表 | 菜鸟教程</title>
</head>
<body></body>
<div class="container main">
	<!-- 中间 -->
	<div class="row">
	
	<div class="col middle-column">
			
		<div class="article">
		<div class="article-heading">
			<h2>笔记列表</h2>
            		</div>
		<div class="article-body">
	      <div id="list"><div class="listItem listItem-first highlight" data-index="0"><div class="listItemContent"><div class="listItemContent-title">1、Linux cat命令&nbsp; <i class="fa fa-minus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/linux/linux-comm-cat.html#comment-43725"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content" style="display: block;"><p><strong>dev/null</strong>：在类 Unix 系统中，/dev/null 称空设备，是一个特殊的设备文件，它丢弃一切写入其中的数据（但报告写入操作成功），读取它则会立即得到一个 EOF。</p>

<p>而使用 <span class="marked">cat $filename &gt; /dev/null</span> 则不会得到任何信息，因为我们将本来该通过标准输出显示的文件信息重定向到了 /dev/null 中。</p>

<p>使用 <span class="marked">cat $filename 1 &gt; /dev/null</span> 也会得到同样的效果，因为默认重定向的 1 就是标准输出。  如果你对 shell 脚本或者重定向比较熟悉的话，应该会联想到 2 ，也即标准错误输出。</p>

<p>如果我们不想看到错误输出呢？我们可以禁止标准错误 <span class="marked">cat $badname 2 &gt; /dev/null</span>。</p></div></div></div><div class="listItem" data-index="1"><div class="listItemContent"><div class="listItemContent-title">2、Java 多态&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/java/java-polymorphism.html#comment-43721"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>可以通过抽象类引用指向不同的子类实例，实现动态多态性。</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Test</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pun">[]</span><span class="pln"> args</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="com">//show(new Cat());  // 以 Cat 对象调用 show 方法</span><span class="pln">
      </span><span class="com">//show(new Dog());  // 以 Dog 对象调用 show 方法</span><span class="pln">
      </span><span class="typ">Animal</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">        
      a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Cat</span><span class="pun">();</span><span class="pln">    
      a</span><span class="pun">.</span><span class="pln">eat</span><span class="pun">();</span><span class="pln">               
      a</span><span class="pun">.</span><span class="pln">work</span><span class="pun">();</span><span class="pln">        
      a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Dog</span><span class="pun">();</span><span class="pln">   
      a</span><span class="pun">.</span><span class="pln">eat</span><span class="pun">();</span><span class="pln">               
      a</span><span class="pun">.</span><span class="pln">work</span><span class="pun">();</span><span class="pln">       
      
  </span><span class="pun">}</span><span class="pln">  
            
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> show</span><span class="pun">(</span><span class="typ">Animal</span><span class="pln"> a</span><span class="pun">)</span><span class="pln">  </span><span class="pun">{</span><span class="pln">
      a</span><span class="pun">.</span><span class="pln">eat</span><span class="pun">();</span><span class="pln"> 
      a</span><span class="pun">.</span><span class="pln">work</span><span class="pun">();</span><span class="pln"> 
    </span><span class="pun">}</span><span class="pln">  
</span><span class="pun">}</span><span class="pln">
 
</span><span class="kwd">abstract</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Animal</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
    </span><span class="kwd">abstract</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> eat</span><span class="pun">();</span><span class="pln">  
    </span><span class="kwd">abstract</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> work</span><span class="pun">();</span><span class="pln">  
</span><span class="pun">}</span><span class="pln">  
  
</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Cat</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Animal</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> eat</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
        </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"吃鱼"</span><span class="pun">);</span><span class="pln">  
    </span><span class="pun">}</span><span class="pln">  
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> work</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
        </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"抓老鼠"</span><span class="pun">);</span><span class="pln">  
    </span><span class="pun">}</span><span class="pln">  
</span><span class="pun">}</span><span class="pln">  
  
</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Dog</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Animal</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> eat</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
        </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"吃骨头"</span><span class="pun">);</span><span class="pln">  
    </span><span class="pun">}</span><span class="pln">  
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> work</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  
        </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"看家"</span><span class="pun">);</span><span class="pln">  
    </span><span class="pun">}</span><span class="pln">  
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="2"><div class="listItemContent"><div class="listItemContent-title">3、C 运算符&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cprogramming/c-operators.html#comment-43612"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>运算符优先级：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pun">括号成员是老大;</span><span class="pln">      </span><span class="com">// 括号运算符 []() 成员运算符.  -&gt;</span><span class="pln">

</span><span class="pun">全体单目排老二;</span><span class="pln">      </span><span class="com">// 所有的单目运算符比如++、 --、 +(正)、 -(负) 、指针运算*、&amp;</span><span class="pln">

</span><span class="pun">乘除余三,加减四;</span><span class="pln">    </span><span class="com">// 这个"余"是指取余运算即%</span><span class="pln">

</span><span class="pun">移位五，关系六;</span><span class="pln">     </span><span class="com">// 移位运算符：&lt;&lt; &gt;&gt; ，关系：&gt; &lt; &gt;= &lt;= 等</span><span class="pln">

</span><span class="pun">等与不等排行七;</span><span class="pln">     </span><span class="com">// 即 == 和 !=</span><span class="pln">

</span><span class="pun">位与异或和位或;</span><span class="pln">     </span><span class="com">// 这几个都是位运算: 位与(&amp;)异或(^)位或(|)    </span><span class="pln">

</span><span class="str">"三分天下"</span><span class="pun">八九十;</span><span class="pln">  

</span><span class="pun">逻辑与，逻辑或;</span><span class="pln">    </span><span class="com">// 逻辑运算符: || 和 &amp;&amp;</span><span class="pln">

</span><span class="pun">十一十二紧挨着;</span><span class="pln">    </span><span class="com">// 注意顺序: 优先级(||)  底于 优先级(&amp;&amp;) </span><span class="pln">

</span><span class="pun">条件只比赋值高,</span><span class="pln">    </span><span class="com">// 三目运算符优先级排到 13 位只比赋值运算符和 "," 高</span><span class="pln">

</span><span class="pun">逗号运算最低级!</span><span class="pln">    </span><span class="com">//逗号运算符优先级最低 </span></pre></div></div></div><div class="listItem" data-index="3"><div class="listItemContent"><div class="listItemContent-title">4、网站主机介绍&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/hosting/host-intro.html#comment-43606"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>网站主机就像是零售店，供货商把自己的产品提供给零售店来出售，零售店帮你存储产品(并固定存储)，当有买主看到想要的产品后，直接发起购买需求，就完成了一个请求。</p><p>主机——零售店</p><p>网站——产品</p><p>开发人员——供货商</p><p>网民——买主</p></div></div></div><div class="listItem" data-index="4"><div class="listItemContent"><div class="listItemContent-title">5、C 练习实例80&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cprogramming/c-exercise-example80.html#comment-43604"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>参考方法：</p>
<pre class="prettyprint prettyprinted" style=""><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span><span class="pln">
</span><span class="com">#include</span><span class="str">&lt;stdlib.h&gt;</span><span class="pln">

</span><span class="kwd">int</span><span class="pln"> calc_peaches</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> monkeys</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">//猴子总数</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">int</span><span class="pln"> m </span><span class="pun">=</span><span class="pln"> monkeys</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">//猴子每次待分桃子数</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">int</span><span class="pln"> remain</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">while</span><span class="pun">(</span><span class="lit">1</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">//最后一只猴子待分配的桃子数一定能被4整除</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;remain </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">m</span><span class="pun">=</span><span class="pln">monkeys</span><span class="pun">;</span><span class="pln"> m</span><span class="pun">&gt;</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> m</span><span class="pun">--)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">// 每只猴子待分配的桃子数remain，满足(remain - 1) % 5 = 0</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">((</span><span class="pln">remain </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">%</span><span class="pln"> </span><span class="lit">5</span><span class="pln"> </span><span class="pun">!=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">// 除第一只猴子外，其他猴子待分配的桃子数remain，满足remain % 4 = 0</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">m </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> remain </span><span class="pun">%</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">!=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">// 不是第一只猴子时，计算出上一只猴子待分配的桃子数</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">m </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;remain </span><span class="pun">=</span><span class="pln"> remain</span><span class="pun">*</span><span class="lit">5</span><span class="pun">/</span><span class="lit">4</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">else</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">// 待分配的桃子已满足monkeys只猴子的分配要求</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">m </span><span class="pun">==</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">// 不满足时，则说明最后一只猴子待分配的桃子数不对，更换后再试</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">else</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i</span><span class="pun">++;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">return</span><span class="pln"> remain</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">


</span><span class="kwd">int</span><span class="pln"> main</span><span class="pun">(</span><span class="kwd">void</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">int</span><span class="pln"> monkeys</span><span class="pun">;</span><span class="pln">

&nbsp;&nbsp;&nbsp;&nbsp;printf</span><span class="pun">(</span><span class="str">"请输入猴子的数量: "</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;scanf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln">monkeys</span><span class="pun">);</span><span class="pln">

&nbsp;&nbsp;&nbsp;&nbsp;printf</span><span class="pun">(</span><span class="str">"桃子总数: %d\n"</span><span class="pun">,</span><span class="pln"> calc_peaches</span><span class="pun">(</span><span class="pln">monkeys</span><span class="pun">));</span><span class="pln">
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="5"><div class="listItemContent"><div class="listItemContent-title">6、Java 基础语法&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/java/java-basic-syntax.html#comment-43602"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong>数据类型的溢出</strong></p>

<p>在 Java 中，只有数字类型才能参与运算。但是每个数据类型都有他的取值范围。</p>

<p>例如 byte 数据类型，它的取值范围为 <span class="marked">-168 - 167</span> 。</p>

<p>当我们使用 <span class="marked">byte  b  =  168;</span> 时，肯定会报错。</p>

<p>但是使用 <span class="marked">byte b  =   167+1;</span>  并不会报错。</p>

<p>而且运算的结果为 <strong>-168</strong>。</p>

<p>我们可以向数据类型的取值范围看作是一个圆，每多一个数据向前移动一个，当数据达到最大值时，我们再加1，可以就会变成最小值，这就是数据的溢出。</p></div></div></div><div class="listItem" data-index="6"><div class="listItemContent"><div class="listItemContent-title">7、Go 并发&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-concurrent.html#comment-43565"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main

</span><span class="kwd">import</span><span class="pln"> </span><span class="str">"fmt"</span><span class="pln">

func main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;ch </span><span class="pun">:=</span><span class="pln"> make</span><span class="pun">(</span><span class="pln">chan </span><span class="kwd">int</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span><span class="pln">

&nbsp;&nbsp;&nbsp;&nbsp;ch </span><span class="pun">&lt;-</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;a </span><span class="pun">:=</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln">ch
&nbsp;&nbsp;&nbsp;&nbsp;ch </span><span class="pun">&lt;-</span><span class="pln"> </span><span class="lit">2</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;ch </span><span class="pun">&lt;-</span><span class="pln"> </span><span class="lit">3</span><span class="pln">

&nbsp;&nbsp;&nbsp;&nbsp;fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(&lt;-</span><span class="pln">ch</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(&lt;-</span><span class="pln">ch</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="pln">a</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>通道遵循先进先出原则。</p>
<p>不带缓冲区的通道在向通道发送值时，必须及时接收，且必须一次接收完成。</p>
<p>而带缓冲区的通道则会以缓冲区满而阻塞，直到先塞发送到通道的值被从通道中接收才可以继续往通道传值。就像往水管里推小钢珠一样，如果钢珠塞满没有从另一头放出，那么这一头就没法再往里塞，是一个道理。例如上面的例子，最多只能让同时在通道中停放2个值，想多传值，就需要把前面的值提前从通道中接收出去。</p>

<p>因此，上面的输出结果为：</p>
<pre class="prettyprint prettyprinted" style=""><span class="lit">2</span><span class="pln">
</span><span class="lit">3</span><span class="pln">
</span><span class="lit">1</span></pre></div></div></div><div class="listItem" data-index="7"><div class="listItemContent"><div class="listItemContent-title">8、Go 语言多维数组&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-multi-dimensional-arrays.html#comment-43558"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong>习惯性跳坑：</strong>多维数组初始化或赋值时需要注意 Go 语法规范，该写在一行就写在一行，一行一条语句。</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main 

</span><span class="kwd">import</span><span class="pln"> </span><span class="str">"fmt"</span><span class="pln">

func main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">5</span><span class="pun">]</span><span class="kwd">int</span><span class="pln"> </span><span class="pun">{{</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">9</span><span class="pun">,</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> </span><span class="lit">7</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span><span class="pln"> </span><span class="lit">7</span><span class="pun">}}</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> j </span><span class="kwd">int</span><span class="pln">
  </span><span class="kwd">for</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"a[%d][%d] = %d\n"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">,</span><span class="pln">j</span><span class="pun">,</span><span class="pln"> a</span><span class="pun">[</span><span class="pln">i</span><span class="pun">][</span><span class="pln">j</span><span class="pun">])</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>以上为将二维数组输出，结果可自行尝试运行查看。</p></div></div></div><div class="listItem" data-index="8"><div class="listItemContent"><div class="listItemContent-title">9、中介者模式&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/design-pattern/mediator-pattern.html#comment-43556"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>上面的缺失类中介实现类:</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Mediator</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">AbstractMediator</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">Mediator</span><span class="pun">(</span><span class="typ">AbstractCardPater</span><span class="pln"> a</span><span class="pun">,</span><span class="pln"> </span><span class="typ">AbstractCardPater</span><span class="pln"> b</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="lit">@Override</span><span class="pln">
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> </span><span class="typ">AWin</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> money</span><span class="pun">,</span><span class="pln"> </span><span class="typ">AbstractCardPater</span><span class="pln"> abstractCardPater</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        A</span><span class="pun">.</span><span class="typ">Money</span><span class="pln"> </span><span class="pun">+=</span><span class="pln"> money</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">int</span><span class="pln"> tmp </span><span class="pun">=</span><span class="pln"> abstractCardPater</span><span class="pun">.</span><span class="pln">getMoney</span><span class="pun">()</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> money</span><span class="pun">;</span><span class="pln">
        abstractCardPater</span><span class="pun">.</span><span class="pln">setMoney</span><span class="pun">(</span><span class="pln">tmp</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="lit">@Override</span><span class="pln">
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> </span><span class="typ">BWin</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> money</span><span class="pun">,</span><span class="pln"> </span><span class="typ">AbstractCardPater</span><span class="pln"> abstractCardPater</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        B</span><span class="pun">.</span><span class="typ">Money</span><span class="pln"> </span><span class="pun">+=</span><span class="pln"> money</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">int</span><span class="pln"> tmp </span><span class="pun">=</span><span class="pln"> abstractCardPater</span><span class="pun">.</span><span class="pln">getMoney</span><span class="pun">()</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> money</span><span class="pun">;</span><span class="pln">
        abstractCardPater</span><span class="pun">.</span><span class="pln">setMoney</span><span class="pun">(</span><span class="pln">tmp</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>

<p>还有上面的 main() 函数逻辑有问题  <strong>A.ChangeMoney(5, B, mediator);</strong> 应该加输方。</p></div></div></div><div class="listItem" data-index="9"><div class="listItemContent"><div class="listItemContent-title">10、Python super() 函数&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python/python-func-super.html#comment-43548"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>经典的菱形继承案例，BC 继承 A，然后 D 继承 BC，创造一个 D 的对象。</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">     </span><span class="pun">---&gt;</span><span class="pln"> B </span><span class="pun">---</span><span class="pln">
A </span><span class="pun">--|</span><span class="pln">          </span><span class="pun">|--&gt;</span><span class="pln"> D
     </span><span class="pun">---&gt;</span><span class="pln"> C </span><span class="pun">---</span></pre>
<p>使用 super() 可以很好地避免构造函数被调用两次。</p>

<pre class="prettyprint prettyprinted" style=""><span class="com"># 思考题正确答案</span><span class="pln">


</span><span class="kwd">class</span><span class="pln"> A</span><span class="pun">():</span><span class="pln">
    </span><span class="kwd">def</span><span class="pln"> __init__</span><span class="pun">(</span><span class="kwd">self</span><span class="pun">):</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'enter A'</span><span class="pun">)</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'leave A'</span><span class="pun">)</span><span class="pln">


</span><span class="kwd">class</span><span class="pln"> B</span><span class="pun">(</span><span class="pln">A</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">def</span><span class="pln"> __init__</span><span class="pun">(</span><span class="kwd">self</span><span class="pun">):</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'enter B'</span><span class="pun">)</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">().</span><span class="pln">__init__</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'leave B'</span><span class="pun">)</span><span class="pln">


</span><span class="kwd">class</span><span class="pln"> C</span><span class="pun">(</span><span class="pln">A</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">def</span><span class="pln"> __init__</span><span class="pun">(</span><span class="kwd">self</span><span class="pun">):</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'enter C'</span><span class="pun">)</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">().</span><span class="pln">__init__</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'leave C'</span><span class="pun">)</span><span class="pln">


</span><span class="kwd">class</span><span class="pln"> D</span><span class="pun">(</span><span class="pln">B</span><span class="pun">,</span><span class="pln"> C</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">def</span><span class="pln"> __init__</span><span class="pun">(</span><span class="kwd">self</span><span class="pun">):</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'enter D'</span><span class="pun">)</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">().</span><span class="pln">__init__</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'leave D'</span><span class="pun">)</span><span class="pln">


d </span><span class="pun">=</span><span class="pln"> D</span><span class="pun">()</span></pre>
<p>执行结果是：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">enter D
enter B
enter C
enter A
leave A
leave C
leave B
leave D</span></pre></div></div></div><div class="listItem" data-index="10"><div class="listItemContent"><div class="listItemContent-title">11、Go 语言 goto 语句&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-goto-statement.html#comment-43540"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>打印九九乘法表:</p>
<pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main 

</span><span class="kwd">import</span><span class="pln"> </span><span class="str">"fmt"</span><span class="pln">

func main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">//print9x()</span><span class="pln">
    gotoTag</span><span class="pun">()</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">//嵌套for循环打印九九乘法表</span><span class="pln">
func print9x</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> m </span><span class="pun">:=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> m </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> m</span><span class="pun">++</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">for</span><span class="pln"> n </span><span class="pun">:=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> n </span><span class="pun">&lt;=</span><span class="pln"> m</span><span class="pun">;</span><span class="pln"> n</span><span class="pun">++</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;  fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"%dx%d=%d "</span><span class="pun">,</span><span class="pln">n</span><span class="pun">,</span><span class="pln">m</span><span class="pun">,</span><span class="pln">m</span><span class="pun">*</span><span class="pln">n</span><span class="pun">)</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">""</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">//for循环配合goto打印九九乘法表</span><span class="pln">
func gotoTag</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> m </span><span class="pun">:=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> m </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> m</span><span class="pun">++</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;n </span><span class="pun">:=</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;LOOP</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> n </span><span class="pun">&lt;=</span><span class="pln"> m </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;    fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"%dx%d=%d "</span><span class="pun">,</span><span class="pln">n</span><span class="pun">,</span><span class="pln">m</span><span class="pun">,</span><span class="pln">m</span><span class="pun">*</span><span class="pln">n</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;    n</span><span class="pun">++</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;    </span><span class="kwd">goto</span><span class="pln"> LOOP
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">""</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;n</span><span class="pun">++</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="11"><div class="listItemContent"><div class="listItemContent-title">12、HTML5 Canvas&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/html/html5-canvas.html#comment-43539"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>自己制作的钟表，觉得还不错，分享一下!</p>
<p><a href="https://c.runoob.com/codedemo/5613" target="_blank" rel="noopener noreferrer nofollow">https://c.runoob.com/codedemo/5613</a></p></div></div></div><div class="listItem" data-index="12"><div class="listItemContent"><div class="listItemContent-title">13、Java 多线程编程&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/java/java-multithreading.html#comment-43527"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>用 CompletableFuture 来解决回调的问题。</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">concurrent</span><span class="pun">.</span><span class="typ">CompletableFuture</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">concurrent</span><span class="pun">.</span><span class="typ">CountDownLatch</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">CompletableFutureDemo</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pun">[]</span><span class="pln"> args</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">throws</span><span class="pln"> </span><span class="typ">InterruptedException</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">long</span><span class="pln"> l </span><span class="pun">=</span><span class="pln"> </span><span class="typ">System</span><span class="pun">.</span><span class="pln">currentTimeMillis</span><span class="pun">();</span><span class="pln">
        </span><span class="typ">CompletableFuture</span><span class="pun">&lt;</span><span class="typ">Integer</span><span class="pun">&gt;</span><span class="pln"> completableFuture </span><span class="pun">=</span><span class="pln"> </span><span class="typ">CompletableFuture</span><span class="pun">.</span><span class="pln">supplyAsync</span><span class="pun">(()</span><span class="pln"> </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"执行耗时操作..."</span><span class="pun">);</span><span class="pln">
            timeConsumingOperation</span><span class="pun">();</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">100</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">
        completableFuture</span><span class="pun">.</span><span class="pln">whenComplete</span><span class="pun">((</span><span class="pln">result</span><span class="pun">,</span><span class="pln"> e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"结果："</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> result</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">
        </span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"主线程运算耗时:"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="pun">(</span><span class="typ">System</span><span class="pun">.</span><span class="pln">currentTimeMillis</span><span class="pun">()</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> l</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">" ms"</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">CountDownLatch</span><span class="pun">(</span><span class="lit">1</span><span class="pun">).</span><span class="pln">await</span><span class="pun">();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> timeConsumingOperation</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">try</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="typ">Thread</span><span class="pun">.</span><span class="pln">sleep</span><span class="pun">(</span><span class="lit">3000</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">catch</span><span class="pln"> </span><span class="pun">(</span><span class="typ">Exception</span><span class="pln"> e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            e</span><span class="pun">.</span><span class="pln">printStackTrace</span><span class="pun">();</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>

<p>控制台输出：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">执行耗时操作...</span><span class="pln">
</span><span class="pun">主线程运算耗时:</span><span class="lit">74</span><span class="pln"> ms
</span><span class="pun">结果：</span><span class="lit">100</span></pre>

<p>可以发现耗时操作没有占用主线程的时间片，达到了异步调用的效果。我们也不需要引入任何第三方的依赖，这都是依赖于 java.util.concurrent.CompletableFuture 的出现。CompletableFuture 提供了近 50 多个方法，大大便捷了 java 多线程操作，和异步调用的写法。</p></div></div></div><div class="listItem" data-index="13"><div class="listItemContent"><div class="listItemContent-title">14、Java MySQL 连接&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/java/java-mysql-connect.html#comment-43516"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>使用 Maven 自动下载 mysql-connector-java。</p>

<p>在 maven 工程下的 pom.xml  中加mysql-connector-java 的依赖，只需要填想要的版本号，就能自动下载对应的 jar 包，更加方便。</p>


<pre class="prettyprint prettyprinted" style=""><span class="tag">&lt;dependency&gt;</span><span class="pln">
    </span><span class="tag">&lt;groupId&gt;</span><span class="pln">mysql</span><span class="tag">&lt;/groupId&gt;</span><span class="pln">
    </span><span class="tag">&lt;artifactId&gt;</span><span class="pln">mysql-connector-java</span><span class="tag">&lt;/artifactId&gt;</span><span class="pln">
    </span><span class="tag">&lt;version&gt;</span><span class="pln">8.0.16</span><span class="tag">&lt;/version&gt;</span><span class="pln">
</span><span class="tag">&lt;/dependency&gt;</span></pre></div></div></div><div class="listItem" data-index="14"><div class="listItemContent"><div class="listItemContent-title">15、Java 条件语句 – if…else&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/java/java-if-else-switch.html#comment-43496"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>用for和if绘制一个图形</p><p>&nbsp;* * * * * * * * * * * * *</p><p>&nbsp;*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp;*</p><p>&nbsp;* @&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@ *</p><p>&nbsp;*&nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*</p><p>&nbsp;*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*</p><p>&nbsp;* * * * * * * * * * * * *</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">io</span><span class="pun">.*;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="typ">Scanner</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">IfelseP</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> draw</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> h</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> m </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> m </span><span class="pun">&lt;=</span><span class="pln"> h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> m</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> n </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> n </span><span class="pun">&lt;=</span><span class="pln"> h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> n</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">if</span><span class="pln"> </span><span class="pun">((</span><span class="pln">m </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> n </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">n </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> m </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">m </span><span class="pun">==</span><span class="pln"> h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln"> n </span><span class="pun">&amp;&amp;</span><span class="pln"> n </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">n </span><span class="pun">==</span><span class="pln"> h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> m </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="kwd">print</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"*"</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">n </span><span class="pun">==</span><span class="pln"> </span><span class="pun">(</span><span class="pln">h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">3</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> m </span><span class="pun">||</span><span class="pln"> n </span><span class="pun">==</span><span class="pln"> </span><span class="pun">(</span><span class="pln">h </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> m </span><span class="pun">||</span><span class="pln"> n </span><span class="pun">==</span><span class="pln"> m </span><span class="pun">-</span><span class="pln"> </span><span class="pun">(</span><span class="pln">h </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">2</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">||</span><span class="pln"> n </span><span class="pun">==</span><span class="pln"> </span><span class="pun">(</span><span class="lit">3</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> h </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> m</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="kwd">print</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"@"</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="kwd">print</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="kwd">print</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">();</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">/*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * for (int i=1;i&lt;=h;i++){ //逐行打印 for (int j=1;j&lt;=h;j++){
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * //每行打印个数数行数保持一致 //下面是菱形四天便的函数，在边上的坐标点打印*，否则打印空格 if
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * (j==(h+3)/2-i||j==(h-1)/2+i||j==i-(h-1)/2||j==(3*h+1)/2-i){
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * System.out.print("*"); }else { System.out.print(" "); } }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * System.out.println(); }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */</span><span class="pln"> </span><span class="pun">}</span><span class="pln">

&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pun">[]</span><span class="pln"> args</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">IfelseP</span><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">IfelseP</span><span class="pun">();</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"请输入大于1的奇数："</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="typ">Scanner</span><span class="pln"> scanner </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Scanner</span><span class="pun">(</span><span class="typ">System</span><span class="pun">.</span><span class="kwd">in</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> scanner</span><span class="pun">.</span><span class="pln">nextInt</span><span class="pun">();</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p</span><span class="pun">.</span><span class="pln">draw</span><span class="pun">(</span><span class="pln">a</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="15"><div class="listItemContent"><div class="listItemContent-title">16、C 作用域规则&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cprogramming/c-scope-rules.html#comment-43479"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>关于C语言形参与实参的区别，我就简单说几点：</p><p>实参可以是变量，变量与表达式。实参与形参。</p><p>实参与形参类型相同或赋值兼容</p><p>在调用函数过程中发生的实参与形参之间的数据传递，常称为“虚实结合”</p><ol><li>在定义函数中制定的形参，在没有出现函数调用时不占用内存中的存储单元。在函数调用时才分配内存</li><li>将实参的值传递给形参</li><li>在执行函数时，由于形参已经有值。可以用形参进行运算。</li><li>通过return语句将函数值返回，若无返回值，则无return</li><li>调用结束后，形参被释放掉，实参保留原值（单向传值）</li></ol></div></div></div><div class="listItem" data-index="16"><div class="listItemContent"><div class="listItemContent-title">17、Python3 数字(Number)&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/python3-number.html#comment-43471"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>一定要注意 <strong>+=</strong> 和 <strong>=+</strong> 的不同。</p>

<p>实例 1：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">&gt;&gt;&gt;</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> a </span><span class="pun">+=</span><span class="pln"> </span><span class="lit">6</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> a
</span><span class="lit">11</span></pre>
<p>以上实例与下面实例的效果一样：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">&gt;&gt;&gt;</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> a </span><span class="pun">+</span><span class="pln"> </span><span class="lit">6</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> a
</span><span class="lit">11</span></pre>

<p>实例2：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">&gt;&gt;&gt;</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> b </span><span class="pun">=+</span><span class="pln"> </span><span class="lit">6</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> b
</span><span class="lit">6</span></pre>
<p>为什么会是 6 而不是 11 呢? 因为实例2与下面代码一样：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">&gt;&gt;&gt;</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="pun">+</span><span class="lit">6</span><span class="pln">  </span><span class="com"># 其实就是正数，只是一个赋值操作，+ 6 即为 +6，+6 为 6</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> b
</span><span class="lit">6</span></pre>
<p>一定要分清 += 和 =+ 哦！另外要注意 Python 可是没有 a++ 指令的！</p></div></div></div><div class="listItem" data-index="17"><div class="listItemContent"><div class="listItemContent-title">18、JavaScript sort() 方法&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/jsref/jsref-sort.html#comment-43470"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>这个 sort() 方法，如果看上面的例子会非常痛苦。</p>

<p>sort() 方法，有一个可选参数，必须是函数，供它调用。那么就是个回调函数咯！</p>

<p>回调函数的参数要有两个：第一个参数的元素肯定在第二个参数的元素前面!!!</p>

<p>这个方法的排序是看回调函数的返回值：</p>
<ul><li>
如果返回值大于 0，则位置互换。
</li><li>
如果返回值小于 0，则位置不变。
</li></ul>
<p>例子:</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">9</span><span class="pun">,</span><span class="lit">7</span><span class="pun">,</span><span class="lit">2</span><span class="pun">];</span><span class="pln">

arr</span><span class="pun">.</span><span class="pln">sort</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln">b</span><span class="pun">){</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">if</span><span class="pun">(</span><span class="pln">a</span><span class="pun">&gt;</span><span class="pln">b</span><span class="pun">)</span><span class="pln"> </span><span class="com">// 如果 a 大于 b,位置互换</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">else</span><span class="pln"> </span><span class="com">//否则，位置不变</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">return</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="com">// 排序结果: 2,7,9</span></pre></div></div></div><div class="listItem" data-index="18"><div class="listItemContent"><div class="listItemContent-title">19、C# 类型转换&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/csharp/csharp-type-conversion.html#comment-43469"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong>1）</strong>对于转换对象，Convert.ToInt32() 可以为多种类型（例出数字类型外 bool，DateTime 等），int.TryParse() 和 int.Parse() 只能是整型字符串类型（即各种整型 ToString() 之后的形式，不能为浮点型，否则 int.Parse() 就会出现输入的字符串格式不正确的错误，int.TryParse() 也会返回 false，输出参数为 0 ，(int)只能是数字类型（例 float,int,uint等）；</p>

<p><strong>2）</strong>对于空值 NULL，从运行报错的角度讲，(int) 强制转换和 int.Parse() 都不能接受 NULL；Convert.ToInt32() 其实是在转换前先做了一个判断，参数如果为 NULL，则直接返回 0，否则就调用 int.Parse() 进行转换，int.TryParse() 其实是对 int.Parse() 做了一个异常处理，如果出现异常则返回 false，并且将输出参数返回 0；</p>

<p><strong>3）</strong>针对于浮点型的取舍问题，浮点型只有 Convert.ToInt32() 和 (int) 能进行转换，但是也是进行取舍了的，Convert.ToInt32() 采取的取舍是进行四舍五入，而 (int) 则是截取浮点型的整数部分，忽略小数部分，例如 Convert.ToInt32(1.499d) 和 (int)1.499d 都返回 1，Convert.ToInt32(1.5d) 返回 2，而 (int)1.5d 还是返回 1；</p>

<p><strong>4）</strong>关于溢出，将大的数据类型转换为小的数据类型时 Convert.ToInt32() 和 int.Parse() 都会报溢出错误，值对于 Int32 太大或太小，而 (int) 不报错，但是返回值为 -1。</p>

<p>如此可见，我们在进行数据转换前选择转换方法要谨慎，如果是数字类型可以考虑直接用(int)强制转换，如果是整型字符串类型的，考虑用 int.Parse() 进行转换，如果不是这两种类型，再考虑用 Convert.ToInt32() 进行转换。</p></div></div></div><div class="listItem" data-index="19"><div class="listItemContent"><div class="listItemContent-title">20、Go 语言接口&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-interfaces.html#comment-43431"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong>将接口做为参数</strong></p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main

</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
    </span><span class="str">"fmt"</span><span class="pln">
</span><span class="pun">)</span><span class="pln">

type </span><span class="typ">Phone</span><span class="pln"> </span><span class="kwd">interface</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    call</span><span class="pun">()</span><span class="pln"> </span><span class="kwd">string</span><span class="pln"> 
</span><span class="pun">}</span><span class="pln">

type </span><span class="typ">Android</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    brand </span><span class="kwd">string</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

type </span><span class="typ">IPhone</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    version </span><span class="kwd">string</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

func </span><span class="pun">(</span><span class="pln">android </span><span class="typ">Android</span><span class="pun">)</span><span class="pln"> call</span><span class="pun">()</span><span class="pln"> </span><span class="kwd">string</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="str">"I am Android "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> android</span><span class="pun">.</span><span class="pln">brand
</span><span class="pun">}</span><span class="pln">

func </span><span class="pun">(</span><span class="pln">iPhone </span><span class="typ">IPhone</span><span class="pun">)</span><span class="pln"> call</span><span class="pun">()</span><span class="pln"> </span><span class="kwd">string</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="str">"I am iPhone "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> iPhone</span><span class="pun">.</span><span class="pln">version
</span><span class="pun">}</span><span class="pln">

func printCall</span><span class="pun">(</span><span class="pln">p </span><span class="typ">Phone</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">call</span><span class="pun">()</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">", I can call you!"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

func main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> vivo </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Android</span><span class="pun">{</span><span class="pln">brand</span><span class="pun">:</span><span class="str">"Vivo"</span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> hw </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Android</span><span class="pun">{</span><span class="str">"HuaWei"</span><span class="pun">}</span><span class="pln">

    i7 </span><span class="pun">:=</span><span class="pln"> </span><span class="typ">IPhone</span><span class="pun">{</span><span class="str">"7 Plus"</span><span class="pun">}</span><span class="pln">
    ix </span><span class="pun">:=</span><span class="pln"> </span><span class="typ">IPhone</span><span class="pun">{</span><span class="str">"X"</span><span class="pun">}</span><span class="pln">

    printCall</span><span class="pun">(</span><span class="pln">vivo</span><span class="pun">)</span><span class="pln">
    printCall</span><span class="pun">(</span><span class="pln">hw</span><span class="pun">)</span><span class="pln">
    printCall</span><span class="pun">(</span><span class="pln">i7</span><span class="pun">)</span><span class="pln">
    printCall</span><span class="pun">(</span><span class="pln">ix</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>输出结果：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">I am </span><span class="typ">Android</span><span class="pln"> </span><span class="typ">Vivo</span><span class="pun">,</span><span class="pln"> I can call you</span><span class="pun">!</span><span class="pln">
I am </span><span class="typ">Android</span><span class="pln"> </span><span class="typ">HuaWei</span><span class="pun">,</span><span class="pln"> I can call you</span><span class="pun">!</span><span class="pln">
I am iPhone </span><span class="lit">7</span><span class="pln"> </span><span class="typ">Plus</span><span class="pun">,</span><span class="pln"> I can call you</span><span class="pun">!</span><span class="pln">
I am iPhone X</span><span class="pun">,</span><span class="pln"> I can call you</span><span class="pun">!</span></pre></div></div></div><div class="listItem" data-index="20"><div class="listItemContent"><div class="listItemContent-title">21、C# 交错数组&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/csharp/csharp-jagged-arrays.html#comment-43419"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>在 C# 语法中，交错数组使用两个中括号定义，但是，两个中括号很容易让人误以为它是二维数组，其实，它本质上是一维数组。</p>

<pre class="prettyprint prettyprinted" style=""><span class="com">//交错数组</span><span class="pln">

</span><span class="kwd">int</span><span class="pun">[][]</span><span class="pln"> num8 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][]</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">},</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">},</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">};</span><span class="pln">

</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> num8</span><span class="pun">.</span><span class="typ">Length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">&lt;</span><span class="pln"> num8</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="typ">Length</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++)</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
        </span><span class="typ">Console</span><span class="pun">.</span><span class="typ">WriteLine</span><span class="pun">(</span><span class="str">"num8[{0},{1}]={2}"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> j</span><span class="pun">,</span><span class="pln"> num8</span><span class="pun">[</span><span class="pln">i</span><span class="pun">][</span><span class="pln">j</span><span class="pun">]);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="typ">Console</span><span class="pun">.</span><span class="typ">WriteLine</span><span class="pun">(</span><span class="str">" "</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="typ">Console</span><span class="pun">.</span><span class="typ">WriteLine</span><span class="pun">(</span><span class="pln">num8</span><span class="pun">.</span><span class="typ">Rank</span><span class="pun">);</span><span class="com">// 函数输出1，表示是一维数组。</span></pre>

<p>上述代码，是遍历里面数组长度不一样的方法。</p></div></div></div><div class="listItem" data-index="21"><div class="listItemContent"><div class="listItemContent-title">22、Bootstrap 按钮组&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/bootstrap/bootstrap-button-groups.html#comment-43410"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>不用那么复杂啊，各位，如果希望能按照顺序显示，只需要在btn-group-vertical 类前，加多一个btn-group类，就可以了。</p>

<pre class="prettyprint prettyprinted" style=""><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn-group"</span><span class="pln"> </span><span class="atn">role</span><span class="pun">=</span><span class="atv">"toolbar"</span><span class="tag">&gt;</span><span class="pln">&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn-group btn-group-vertical"</span><span class="tag">&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 1</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 2</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 3</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;/div&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn-group"</span><span class="tag">&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 4</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 5</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 6</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;/div&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn-group"</span><span class="tag">&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 7</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 8</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"button"</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"btn btn-default"</span><span class="tag">&gt;</span><span class="pln">按钮 9</span><span class="tag">&lt;/button&gt;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></pre></div></div></div><div class="listItem" data-index="22"><div class="listItemContent"><div class="listItemContent-title">23、React 事件中 this 的三种使用方式&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="/note/43407"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p data-title="">React 事件中 this 的三种使用方式</p>

<p><strong>1.bind绑定的方法</strong></p>

<p>不传参</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">Hello</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            content</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    change</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
            content</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content
        </span><span class="pun">})</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content </span><span class="pun">?</span><span class="pln"> </span><span class="str">'1'</span><span class="pun">:</span><span class="str">'2'</span><span class="pun">}&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;h2&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">name</span><span class="pun">}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">}&gt;</span><span class="pln">
                    </span><span class="pun">点击</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Hello</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"Hello"</span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">)</span></pre>
<p>传参</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">Hello</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            content</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">,</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    change</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
            content</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content
        </span><span class="pun">})</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content </span><span class="pun">?</span><span class="pln"> </span><span class="str">'1'</span><span class="pun">:</span><span class="str">'2'</span><span class="pun">}&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;h2&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">name</span><span class="pun">}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">}&gt;</span><span class="pln">
                    </span><span class="pun">点击</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Hello</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"Hello"</span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">)</span></pre>
<p><strong>2.属性初始化器的方式</strong></p>

<p>不传参</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">Hello</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            content</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    change</span><span class="pun">=()=&gt;{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
            content</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content
        </span><span class="pun">})</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content </span><span class="pun">?</span><span class="pln"> </span><span class="str">'1'</span><span class="pun">:</span><span class="str">'2'</span><span class="pun">}&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;h2&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">name</span><span class="pun">}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">}&gt;</span><span class="pln">
                    </span><span class="pun">点击</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Hello</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"Hello"</span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">)</span></pre>
<p>传参</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">Hello</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            content</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    change</span><span class="pun">=</span><span class="pln">obj</span><span class="pun">=&gt;{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
            content</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content
        </span><span class="pun">})</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content </span><span class="pun">?</span><span class="pln"> </span><span class="str">'1'</span><span class="pun">:</span><span class="str">'2'</span><span class="pun">}&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;h2&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">name</span><span class="pun">}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content</span><span class="pun">)}&gt;</span><span class="pln">
                    </span><span class="pun">点击</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Hello</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"Hello"</span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">)</span></pre>
<p><strong>3.回调函数的方式</strong></p>

<p>不传参</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">Hello</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            content</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    change</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
            content</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content
        </span><span class="pun">})</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content </span><span class="pun">?</span><span class="pln"> </span><span class="str">'1'</span><span class="pun">:</span><span class="str">'2'</span><span class="pun">}&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;h2&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">name</span><span class="pun">}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={()=&gt;{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">()}}&gt;</span><span class="pln">
                    </span><span class="pun">点击</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Hello</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"Hello"</span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">)</span></pre>
<p>传参</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">Hello</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">()</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            content</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    
    change</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
            content</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content
        </span><span class="pun">})</span><span class="pln">
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content </span><span class="pun">?</span><span class="pln"> </span><span class="str">'1'</span><span class="pun">:</span><span class="str">'2'</span><span class="pun">}&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;h2&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">name</span><span class="pun">}&lt;/</span><span class="pln">h2</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">button onClick</span><span class="pun">={()=&gt;{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">change</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">content</span><span class="pun">)}}&gt;</span><span class="pln">
                    </span><span class="pun">点击</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Hello</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"Hello"</span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">)</span></pre></div></div></div><div class="listItem" data-index="23"><div class="listItemContent"><div class="listItemContent-title">24、Python split()方法&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python/att-string-split.html#comment-43374"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>统计字符串中 <strong>n</strong> 的出现次数:</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">strtemp</span><span class="pun">=</span><span class="str">'ab2b3n5n2n67mm4n2'</span><span class="pln"> 
</span><span class="kwd">print</span><span class="pun">(</span><span class="pln">len</span><span class="pun">(</span><span class="pln">strtemp</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">'n'</span><span class="pun">))-</span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="com"># 4</span></pre>

</div></div></div><div class="listItem" data-index="24"><div class="listItemContent"><div class="listItemContent-title">25、Perl 数组&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/perl/perl-arrays.html#comment-43373"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>另外还有特殊标识 <span class="marked">$_</span>，表示遍历数组。</p>

<p>实例：</p>

<pre class="prettyprint prettyprinted" style=""><span class="com">#!/usr/bin/perl</span><span class="pln">
 
</span><span class="com"># 定义数组</span><span class="pln">
</span><span class="lit">@sites</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> qw</span><span class="pun">(</span><span class="pln">google taobao runoob facebook</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">foreach</span><span class="pun">(</span><span class="lit">@sites</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">print</span><span class="pln"> $_</span><span class="pun">.</span><span class="str">"\n"</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></pre>
<p>执行以上程序，输出结果为：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">google
taobao
runoob
facebook</span></pre></div></div></div><div class="listItem" data-index="25"><div class="listItemContent"><div class="listItemContent-title">26、Go 语言 select 语句&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-select-statement.html#comment-43369"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>以下实例中有两个 case，每执行一次，会随机进入其中一个 case，结论是 select 会循环检测条件，如果有满足则执行并退出，否则一直循环检测。</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main
</span><span class="kwd">import</span><span class="pln"> </span><span class="str">"fmt"</span><span class="pln">


func </span><span class="typ">Chann</span><span class="pun">(</span><span class="pln">ch chan </span><span class="kwd">int</span><span class="pun">){</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">var</span><span class="pln"> i </span><span class="kwd">int</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;ch </span><span class="pun">&lt;-</span><span class="pln"> i
</span><span class="pun">}</span><span class="pln">
func main</span><span class="pun">(){</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;ch </span><span class="pun">:=</span><span class="pln"> make</span><span class="pun">(</span><span class="pln">chan </span><span class="kwd">int</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;c </span><span class="pun">:=</span><span class="pln"> </span><span class="lit">0</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;go </span><span class="typ">Chann</span><span class="pun">(</span><span class="pln">ch</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">select</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">case</span><span class="pln"> c  </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln"> ch</span><span class="pun">:</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"Recvice"</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"channel"</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">case</span><span class="pln"> s </span><span class="pun">:=</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln">ch</span><span class="pun">:</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"Receive"</span><span class="pun">,</span><span class="pln"> s</span><span class="pun">)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">//default:</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="com">//fmt.Println("Error")</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></pre>
</div></div></div><div class="listItem" data-index="26"><div class="listItemContent"><div class="listItemContent-title">27、Vue.js 模板语法&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/vue2/vue-template-syntax.html#comment-43367"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong>split('')</strong> 是分裂的意思，也就是把一个数据拆分。</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">var</span><span class="pln"> vm </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Vue</span><span class="pun">({</span><span class="pln">
    date</span><span class="pun">:{</span><span class="pln">
        message</span><span class="pun">=</span><span class="str">" Not split "</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
 </span><span class="pun">)}</span><span class="pln">

message</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">''</span><span class="pun">)</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="str">"N"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"o"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"t"</span><span class="pun">,</span><span class="pln"> </span><span class="str">" "</span><span class="pun">,</span><span class="pln"> </span><span class="str">"s"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"p"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"l"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"i"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"t"</span><span class="pln"> </span><span class="pun">]</span></pre>

<p><strong>split('')</strong> 会把数据拆分为一个数组，括号里的 <span class="marked">''</span> 是把数据拆分为每个字符串的意思，如果不用就不会拆分成每个字符串。</p>

 

<p><strong>reverse()</strong> 是翻转的意思，把数据反过来。</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">message</span><span class="pun">.</span><span class="pln">reverse</span><span class="pun">()</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="typ">Not</span><span class="pln"> split   </span><span class="com">// 无效，因为只能对数组起作用</span></pre>

<p>所以要跟在<strong> split('')</strong> 后使用。</p>

 

<p><strong>join('')</strong> 是重组的意思，把数组合成一个字符串。</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">message</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">''</span><span class="pun">).</span><span class="pln">join</span><span class="pun">(</span><span class="str">''</span><span class="pun">)</span></pre>
<p>slpit 后会拆散会数组，join 后就会变回原来的字符串了。</p>
<p>
所以我们要把数据反过来重组就可以用：</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">message</span><span class="pun">.</span><span class="pln">split</span><span class="pun">(</span><span class="str">''</span><span class="pun">).</span><span class="pln">reverse</span><span class="pun">(</span><span class="pln"> </span><span class="pun">).</span><span class="pln">join</span><span class="pun">(</span><span class="str">''</span><span class="pun">)</span></pre></div></div></div><div class="listItem" data-index="27"><div class="listItemContent"><div class="listItemContent-title">28、Go 语言切片(Slice)&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-slice.html#comment-43365"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>slice 的底层是数组指针，所以 slice <strong>a</strong> 和 <strong>s</strong> 指向的是同一个底层数组，所以当修改 <strong>s[0]</strong> 时，<strong>a</strong> 也会被修改。</p>


package main
import "fmt"
func main() {
	s := []int{1, 2, 3} // len=3, cap=3
	a := s
	s[0] = 888
	s = append(s, 4)
	fmt.Println(a, len(a), cap(a)) // 输出：[888 2 3] 3 3
	fmt.Println(s, len(s), cap(s)) // 输出：[888 2 3 4] 4 6
}</div></div></div><div class="listItem" data-index="28"><div class="listItemContent"><div class="listItemContent-title">29、Python 字典 pop() 方法&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python/python-att-dictionary-pop.html#comment-43326"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>del 语句和 pop() 函数作用相同，pop() 函数有返回值。</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">&gt;&gt;&gt;</span><span class="pln"> dic</span><span class="pun">={</span><span class="str">'runoob'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'菜鸟教程'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'google'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Google 搜索'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'taobao'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'淘宝'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'tmall'</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">None</span><span class="pun">}</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> </span><span class="kwd">del</span><span class="pln"> dic</span><span class="pun">[</span><span class="str">'tmall'</span><span class="pun">]</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> dic
</span><span class="pun">{</span><span class="str">'runoob'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'菜鸟教程'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'google'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Google 搜索'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'taobao'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'淘宝'</span><span class="pun">}</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> dic</span><span class="pun">.</span><span class="pln">setdefault</span><span class="pun">(</span><span class="str">'tmall'</span><span class="pun">,</span><span class="str">'天猫'</span><span class="pun">)</span><span class="pln">
</span><span class="str">'天猫'</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> dic
</span><span class="pun">{</span><span class="str">'runoob'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'菜鸟教程'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'google'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Google 搜索'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'taobao'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'淘宝'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'tmall'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'天猫'</span><span class="pun">}</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> dic</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">(</span><span class="str">'tmall'</span><span class="pun">)</span><span class="pln">
</span><span class="str">'天猫'</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span><span class="pln"> dic
</span><span class="pun">{</span><span class="str">'runoob'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'菜鸟教程'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'google'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Google 搜索'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'taobao'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'淘宝'</span><span class="pun">}</span><span class="pln">
</span><span class="pun">&gt;&gt;&gt;</span></pre></div></div></div><div class="listItem" data-index="29"><div class="listItemContent"><div class="listItemContent-title">30、C++ 数据结构&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cplusplus/cpp-data-structures.html#comment-43299"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>接着楼上几位说。 </p> 

<p>根据原先 C98 的标准，结构体定义的时候需要使用 typedef。</p>

<p>但是对于更新的 C99 标准和 C11 及以上的标准，typedef 可以省略或者强制省略。</p>

<p>对于定义 struct 的时候，C98 需要添加 struct，但是同时 C99 标准也去掉了。</p>

<p>举个小例子（可能不全）：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">typedef</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> edge</span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">int</span><span class="pln"> </span><span class="kwd">from</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">int</span><span class="pln"> to</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">int</span><span class="pln"> dis</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">struct</span><span class="pln"> </span><span class="typ">Edge</span><span class="pun">[</span><span class="lit">101</span><span class="pun">];</span><span class="pln">
</span><span class="com">//C98</span></pre>
<p>现在的新标准（通用的）会变成：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">struct</span><span class="pln"> edge</span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">int</span><span class="pln"> </span><span class="kwd">from</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">int</span><span class="pln"> to</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">int</span><span class="pln"> dis</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">
edge </span><span class="typ">Edge</span><span class="pun">[</span><span class="lit">101</span><span class="pun">];</span><span class="pln">
</span><span class="com">//C99</span></pre>

<p>同时 C99 的例子中 edge 类型就可以像 int 类型一样赋值、传输、传地址、定义、作为函数类型...</p>

<p>需要的时候还可以重载运算符，重载运算符可以参考这个站的其他内容了。
</p>
<p>同时再讲点新的：</p>

<p>对于结构体类型的变量，我们可以限制成员的位数大小。</p>

<p>举个例子：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">struct</span><span class="pln"> demo</span><span class="pun">{</span><span class="kwd">int</span><span class="pln"> demoint</span><span class="pun">:</span><span class="lit">1</span><span class="pun">;};</span></pre>
<p>这样就限制了 demoint 成员只占一个 B。</p></div></div></div><div class="listItem" data-index="30"><div class="listItemContent"><div class="listItemContent-title">31、Java 中的运算符的左右结合性是什么意思&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="/note/43297"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong data-title="">Java 中的运算符的左右结合性是什么意思</strong></p>

<p>所有的数学运算符都认为是从左到右运算的，Java 语言中大部分运算符也是从左到右结合的，只有单目运算符、赋值运算符和三目运算符例外，其中，单目运算符、赋值运算符和三目运算符是从右向左结合的，也就是从右向左运算。</p>

 <p>乘法和加法是两个可结合的运算，也就是说，这两个运算符左右两边的操作数可以互换位置而不会影响结果。</p>


<p>当有多中运算符参与运算的时候，先要考虑优先级，有相同优先级的就看结合性以决定运算顺序。</p>

<p>因为这样，所以，如果没有两个相同优先级的运算，就不存在考虑结合性的问题了。一个 <span class="marked">?:</span> 是体现不出来结合性的。 请看这个：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">a</span><span class="pun">?</span><span class="pln">b</span><span class="pun">:</span><span class="pln">c</span><span class="pun">?</span><span class="pln">d</span><span class="pun">:</span><span class="pln">e</span></pre>

<p>这个要怎么算？先看优先级，两个一样。再看结合性，右结合，所以先算：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">c</span><span class="pun">?</span><span class="pln">d</span><span class="pun">:</span><span class="pln">e</span></pre>

<p>再算:</p><pre class="prettyprint prettyprinted" style=""><span class="pln"> a</span><span class="pun">?</span><span class="pln">b</span><span class="pun">:(</span><span class="pln">c</span><span class="pun">?</span><span class="pln">d</span><span class="pun">:</span><span class="pln">e</span><span class="pun">)</span></pre> 
<p>这就是所谓右结合。如果是左结合的话 就是先算:</p><pre class="prettyprint prettyprinted" style=""><span class="pln">a</span><span class="pun">?</span><span class="pln">b</span><span class="pun">:</span><span class="pln">c</span></pre>

<p>再算:</p> <pre class="prettyprint prettyprinted" style=""><span class="pun">(</span><span class="pln">a</span><span class="pun">?</span><span class="pln">b</span><span class="pun">:</span><span class="pln">c</span><span class="pun">)?</span><span class="pln">d</span><span class="pun">:</span><span class="pln">e</span></pre>

<p>实际上，一般结合性的问题都可以用括号来解决。</p></div></div></div><div class="listItem" data-index="31"><div class="listItemContent"><div class="listItemContent-title">32、Python3 错误和异常&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/python3-errors-execptions.html#comment-43293"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>使用一个快捕捉多个异常：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">def</span><span class="pln"> model_exception</span><span class="pun">(</span><span class="pln">x</span><span class="pun">,</span><span class="pln">y</span><span class="pun">):</span><span class="pln">
  </span><span class="kwd">try</span><span class="pun">:</span><span class="pln">
    b </span><span class="pun">=</span><span class="pln"> name
    a </span><span class="pun">=</span><span class="pln">x</span><span class="pun">/</span><span class="pln">y
  </span><span class="kwd">except</span><span class="pun">(</span><span class="typ">ZeroDivisionError</span><span class="pun">,</span><span class="typ">NameError</span><span class="pun">,</span><span class="typ">TypeError</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'one of ZeroDivisionError or NameError or TypeError happend'</span><span class="pun">)</span><span class="pln">

</span><span class="com">#调用函数结果</span><span class="pln">
model_exception</span><span class="pun">(</span><span class="lit">2</span><span class="pun">,</span><span class="lit">0</span><span class="pun">)</span></pre>
<p>输出如下:</p>
<pre class="prettyprint prettyprinted" style=""><span class="pln">one of </span><span class="typ">ZeroDivisionError</span><span class="pln"> </span><span class="kwd">or</span><span class="pln"> </span><span class="typ">NameError</span><span class="pln"> </span><span class="kwd">or</span><span class="pln"> </span><span class="typ">TypeError</span><span class="pln"> happend</span></pre></div></div></div><div class="listItem" data-index="32"><div class="listItemContent"><div class="listItemContent-title">33、Python 移除字符串中的指定位置字符&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/pyhton-remove-ith-character-from-string.html#comment-43270"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>参考方法：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">test_str </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Runoob"</span><span class="pln">
new_str </span><span class="pun">=</span><span class="pln"> test_str</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">(</span><span class="pln">test_str</span><span class="pun">[</span><span class="lit">3</span><span class="pun">],</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="pln">new_str</span><span class="pun">)</span></pre>
</div></div></div><div class="listItem" data-index="33"><div class="listItemContent"><div class="listItemContent-title">34、猴子吃桃问题&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cplusplus/cpp-examples-monkey-eating-peach.html#comment-43251"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>使用递归算法，方便又直观：</p>

<pre class="prettyprint prettyprinted" style=""><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;iostream&gt;</span><span class="pln">
</span><span class="kwd">using</span><span class="pln"> </span><span class="kwd">namespace</span><span class="pln"> std</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">int</span><span class="pln"> num</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> n</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">n</span><span class="pun">==</span><span class="lit">1</span><span class="pun">)</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">else</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">2</span><span class="pun">*(</span><span class="pln">num</span><span class="pun">(</span><span class="pln">n</span><span class="pun">-</span><span class="lit">1</span><span class="pun">)+</span><span class="lit">1</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    cout</span><span class="pun">&lt;&lt;</span><span class="str">"桃子一共有："</span><span class="pun">&lt;&lt;</span><span class="pln">num</span><span class="pun">(</span><span class="lit">10</span><span class="pun">)&lt;&lt;</span><span class="str">"个"</span><span class="pun">&lt;&lt;</span><span class="pln">endl</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="34"><div class="listItemContent"><div class="listItemContent-title">35、如何通过快捷键选择(聚焦)文本框？&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="/note/43194"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p><strong data-title="">如何通过快捷键选择(聚焦)文本框？</strong></p>

<p>答：bind_all 绑定快捷键，foucus 选择文本框。</p>

例：

<pre class="prettyprint prettyprinted" style=""><span class="kwd">from</span><span class="pln"> tkinter </span><span class="kwd">import</span><span class="pln">  </span><span class="pun">*</span><span class="pln">
</span><span class="com"># Python 2.x 版本使用 Tkinter</span><span class="pln">
</span><span class="com"># from Tkinter import  *</span><span class="pln">
root </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Tk</span><span class="pun">()</span><span class="pln">
</span><span class="kwd">def</span><span class="pln"> eventhandler</span><span class="pun">(</span><span class="kwd">event</span><span class="pun">):</span><span class="pln">
    entry</span><span class="pun">.</span><span class="pln">focus</span><span class="pun">()</span><span class="pln">
entry</span><span class="pun">=</span><span class="typ">Entry</span><span class="pun">(</span><span class="pln">root</span><span class="pun">,</span><span class="pln">bd</span><span class="pun">=</span><span class="lit">4</span><span class="pun">)</span><span class="pln">
entry</span><span class="pun">.</span><span class="pln">bind_all</span><span class="pun">(</span><span class="str">'&lt;Control-f&gt;'</span><span class="pun">,</span><span class="pln"> eventhandler </span><span class="pun">)</span><span class="pln"> </span><span class="com"># 绑定快捷键Ctrl-f</span><span class="pln">
entry</span><span class="pun">.</span><span class="pln">pack</span><span class="pun">()</span><span class="pln">
root</span><span class="pun">.</span><span class="pln">mainloop</span><span class="pun">()</span></pre>

<p>设置快捷键的方法好找，设置选择的方法我在百度上找不到，就去外网查了一下找到了，写出来分享一下。</p>

<p>具体可以自己去外网搜：<strong>how to set focus in tkinter entr box</strong></p></div></div></div><div class="listItem" data-index="35"><div class="listItemContent"><div class="listItemContent-title">36、Python 判断字符串是否为数字&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/python3-check-is-number.html#comment-43183"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>参考方法：</p>
<pre class="prettyprint prettyprinted" style=""><span class="kwd">string</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> input</span><span class="pun">(</span><span class="str">'请输入一个字符串: '</span><span class="pun">)</span><span class="pln">
</span><span class="com">#使用标志</span><span class="pln">
loop </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> i </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="pln">len</span><span class="pun">(</span><span class="kwd">string</span><span class="pun">)):</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="kwd">string</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="str">'0'</span><span class="pln"> </span><span class="kwd">and</span><span class="pln"> </span><span class="kwd">string</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&lt;=</span><span class="pln"> </span><span class="str">'9'</span><span class="pun">:</span><span class="pln">
        loop </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pln">
    </span><span class="kwd">else</span><span class="pun">:</span><span class="pln">
        loop </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pln">
</span><span class="kwd">if</span><span class="pln"> loop </span><span class="pun">==</span><span class="pln"> </span><span class="lit">1</span><span class="pun">:</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'字符串为数字。\n字符串为:'</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="kwd">string</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">else</span><span class="pun">:</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'字符串不是数字。'</span><span class="pun">)</span></pre>
</div></div></div><div class="listItem" data-index="36"><div class="listItemContent"><div class="listItemContent-title">37、Python 阿姆斯特朗数&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/python3-armstrong-number.html#comment-43180"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>检查输入是否合法:</p>
<pre class="prettyprint prettyprinted" style=""><span class="kwd">while</span><span class="pun">(</span><span class="kwd">True</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">try</span><span class="pun">:</span><span class="pln">
        lower </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">"最小值: "</span><span class="pun">))</span><span class="pln">
        upper </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">"最大值: "</span><span class="pun">))</span><span class="pln">
    </span><span class="kwd">except</span><span class="pln"> </span><span class="typ">ValueError</span><span class="pun">:</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"非法输入"</span><span class="pun">)</span><span class="pln">
        </span><span class="kwd">continue</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> lower</span><span class="pun">&gt;</span><span class="pln">upper</span><span class="pun">:</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"请检查输入大小"</span><span class="pun">)</span><span class="pln">
        </span><span class="kwd">continue</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> num </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="pln">lower</span><span class="pun">,</span><span class="pln"> upper </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">):</span><span class="pln">
        sum </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pln">
        n </span><span class="pun">=</span><span class="pln"> len</span><span class="pun">(</span><span class="pln">str</span><span class="pun">(</span><span class="pln">num</span><span class="pun">))</span><span class="pln">
        temp </span><span class="pun">=</span><span class="pln"> num
        </span><span class="kwd">while</span><span class="pln"> temp </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">:</span><span class="pln">
            digit </span><span class="pun">=</span><span class="pln"> temp </span><span class="pun">%</span><span class="pln"> </span><span class="lit">10</span><span class="pln">
            sum </span><span class="pun">+=</span><span class="pln"> digit </span><span class="pun">**</span><span class="pln"> n
            temp </span><span class="com">//= 10</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> num </span><span class="pun">==</span><span class="pln"> sum</span><span class="pun">:</span><span class="pln">
            </span><span class="kwd">print</span><span class="pun">(</span><span class="pln">num</span><span class="pun">)</span><span class="pln">
    </span><span class="kwd">break</span></pre>
</div></div></div><div class="listItem" data-index="37"><div class="listItemContent"><div class="listItemContent-title">38、Python 二次方程&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/python3-quadratic-roots.html#comment-43179"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>参考方法：</p>
<pre class="prettyprint prettyprinted" style=""><span class="com">#求二次方程的根</span><span class="pln">
</span><span class="kwd">from</span><span class="pln"> cmath </span><span class="kwd">import</span><span class="pln"> sqrt
a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">'please input the number a： '</span><span class="pun">))</span><span class="pln">
b </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">'please input the number b： '</span><span class="pun">))</span><span class="pln">
c </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">int</span><span class="pun">(</span><span class="pln">input</span><span class="pun">(</span><span class="str">'please input the number c： '</span><span class="pun">))</span><span class="pln">
d </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">b </span><span class="pun">**</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> a </span><span class="pun">*</span><span class="pln"> c
</span><span class="com">#方法一：if判别语句</span><span class="pln">
</span><span class="kwd">if</span><span class="pln"> a </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pun">:</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'the number a can not be zero!'</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">else</span><span class="pun">:</span><span class="pln">
    x1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(-</span><span class="pln">b </span><span class="pun">+</span><span class="pln"> sqrt</span><span class="pun">(</span><span class="pln">d</span><span class="pun">))/(</span><span class="lit">2</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> a</span><span class="pun">)</span><span class="pln">
    x2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(-</span><span class="pln">b </span><span class="pun">-</span><span class="pln"> sqrt</span><span class="pun">(</span><span class="pln">d</span><span class="pun">))/(</span><span class="lit">2</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> a</span><span class="pun">)</span><span class="pln">
    </span><span class="com">#！！！！print('x1和x2的值分别为{:0.3f} 和 {:0.3f}'.format(x1,x2))会出现错误，因为复杂格式不允许零填充！！！</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'the values of x1 and x2 are {:.3f} and {:.3f}'</span><span class="pun">.</span><span class="pln">format</span><span class="pun">(</span><span class="pln">x1</span><span class="pun">,</span><span class="pln">x2</span><span class="pun">))</span><span class="pln">
</span><span class="com">#方法二：用异常来进行处理</span><span class="pln">
</span><span class="kwd">try</span><span class="pun">:</span><span class="pln">
    x1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(-</span><span class="pln">b </span><span class="pun">+</span><span class="pln"> sqrt</span><span class="pun">(</span><span class="pln">d</span><span class="pun">))</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="pun">(</span><span class="lit">2</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> a</span><span class="pun">)</span><span class="pln">
    x2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(-</span><span class="pln">b </span><span class="pun">-</span><span class="pln"> sqrt</span><span class="pun">(</span><span class="pln">d</span><span class="pun">))/(</span><span class="lit">2</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> a</span><span class="pun">)</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'the values of x1 and x2 are {:.3f} and {:.3f}'</span><span class="pun">.</span><span class="pln">format</span><span class="pun">(</span><span class="pln">x1</span><span class="pun">,</span><span class="pln">x2</span><span class="pun">))</span><span class="pln">
</span><span class="kwd">except</span><span class="pln"> </span><span class="typ">ZeroDivisionError</span><span class="pun">:</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">'the number a can not be zero!'</span><span class="pun">)</span></pre></div></div></div><div class="listItem" data-index="38"><div class="listItemContent"><div class="listItemContent-title">39、C 数组&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cprogramming/c-arrays.html#comment-43165"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>数组初始化技巧:  将元素全部置零 <span class="marked">{0}</span>。</p>

<pre class="prettyprint prettyprinted" style=""><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span><span class="pln">

</span><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">double</span><span class="pln"> arr</span><span class="pun">[</span><span class="lit">10</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="lit">0</span><span class="pun">};</span><span class="pln">

    </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="kwd">sizeof</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">)/</span><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">double</span><span class="pun">);</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln">
        printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]);</span><span class="pln">
    printf</span><span class="pun">(</span><span class="str">"\n\n"</span><span class="pun">);</span><span class="pln">

    </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">4</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="lit">0</span><span class="pun">};</span><span class="pln">
    </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="lit">3</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> j</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">&lt;</span><span class="lit">4</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++)</span><span class="pln">
                printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> a</span><span class="pun">[</span><span class="pln">i</span><span class="pun">][</span><span class="pln">j</span><span class="pun">]);</span><span class="pln">
        printf</span><span class="pun">(</span><span class="str">"\n"</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    
    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="39"><div class="listItemContent"><div class="listItemContent-title">40、Redis Zlexcount 命令&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/redis/sorted-sets-zlexcount.html#comment-43132"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><pre class="prettyprint prettyprinted" style=""><span class="lit">127.0</span><span class="pun">.</span><span class="lit">0.1</span><span class="pun">:</span><span class="lit">6379</span><span class="pun">&gt;</span><span class="pln"> zadd lpl </span><span class="lit">4</span><span class="pln"> beizi
</span><span class="lit">127.0</span><span class="pun">.</span><span class="lit">0.1</span><span class="pun">:</span><span class="lit">6379</span><span class="pun">&gt;</span><span class="pln"> zlexcount lpl </span><span class="pun">[</span><span class="lit">22</span><span class="pln"> </span><span class="pun">[</span><span class="lit">66</span><span class="pln">
</span><span class="pun">(</span><span class="pln">integer</span><span class="pun">)</span><span class="pln"> </span><span class="lit">3</span></pre>
<p>返回是 3 是因为按顺序从 22 开始统计了 22 33 44 beizi&gt;66, 所以是返回 3。</p>
</div></div></div><div class="listItem" data-index="40"><div class="listItemContent"><div class="listItemContent-title">41、C 标准库 – &lt;stdlib.h&gt;&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cprogramming/c-standard-library-stdlib-h.html#comment-43119"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>● itoa()：将整型值转换为字符串。</p><p>● ltoa()：将长整型值转换为字符串。</p><p>● ultoa()：将无符号长整型值转换为字符串。</p><p>● gcvt()：将浮点型数转换为字符串，取四舍五入。</p><p>● ecvt()：将双精度浮点型值转换为字符串，转换结果中不包含十进制小数点。</p><p>● fcvt()：指定位数为转换精度，其余同ecvt()。</p>



<blockquote><p>更多内容参考：<a href="https://www.runoob.com/w3cnote/c-int2str.html" rel="noopener noreferrer" target="_blank">C 语言整数与字符串的相互转换</a></p></blockquote>


</div></div></div><div class="listItem" data-index="41"><div class="listItemContent"><div class="listItemContent-title">42、React Props&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/react/react-props.html#comment-43112"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>借助楼上的代码，做了个改良，下面的父子模块互相传递参数。</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">class</span><span class="pln"> </span><span class="typ">CptBody</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    constructor</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">super</span><span class="pun">();</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">username </span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">};</span><span class="pln"> </span><span class="com">//可以传json等很多格式（这个是初始化赋值）</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="com">//click事件函数</span><span class="pln">
    changeAge</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">username</span><span class="pun">:</span><span class="lit">1</span><span class="pun">+</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">username</span><span class="pun">})</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="com">//change事件函数</span><span class="pln">
    changeUsername</span><span class="pun">(</span><span class="kwd">event</span><span class="pun">){</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">username</span><span class="pun">:</span><span class="pln">parseInt</span><span class="pun">(</span><span class="kwd">event</span><span class="pun">.</span><span class="pln">target</span><span class="pun">.</span><span class="pln">value</span><span class="pun">)})</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    render</span><span class="pun">(){</span><span class="pln">
       </span><span class="kwd">return</span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;h1&gt;</span><span class="pun">下面的操作有惊喜&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="str">&lt;p&gt;</span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">username</span><span class="pun">}&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">input type</span><span class="pun">=</span><span class="str">"button"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"点击改变username"</span><span class="pln"> onClick</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">changeAge</span><span class="pun">()}/&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="typ">BodyChild</span><span class="pln"> changeUsername</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">changeUsername</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)}</span><span class="pln"> getname</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">username</span><span class="pun">}/&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">


</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">BodyChild</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pun">{</span><span class="pln">
    render</span><span class="pun">(){</span><span class="pln">
        </span><span class="kwd">return</span><span class="pun">(</span><span class="pln">
            </span><span class="str">&lt;div&gt;</span><span class="pln">
                </span><span class="str">&lt;p&gt;</span><span class="pun">子页面输入：&lt;</span><span class="pln">input type</span><span class="pun">=</span><span class="str">'text'</span><span class="pln"> value</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">getname</span><span class="pun">}</span><span class="pln"> onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">changeUsername</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><span class="pln">

            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">CptBody</span><span class="pln">  </span><span class="pun">/&gt;,</span><span class="pln">
    document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">);</span></pre>
<p><a class="tryitbtn" href="https://c.runoob.com/codedemo/5611" target="_blank" rel="noopener noreferrer nofollow">尝试一下 »</a></p>
<p>BodyChild 组件的 render 函数返回值 jsx 中 &lt;p&gt; 的 value 是从父组件获取的 getname 这个变量值，onChange 获取的是 changeUsername 这个函数，所以如果文本框中的值改变了，改变值这个事件会触发 changeUsername 这个函数，这个函数会获得事件的值，即我们文本框修改后的值，并将其赋值给父组件的 state.username 这个变量。而父组件的这个变量改变后，state 随之改变，这时候，render 会重新启动，所以我们会看到修改后的值。</p>

<p>父组件的 jsx 中有一个箭头函数，有一个 bind 函数，这两者有什么区别吗？经验证，这两者是可以互换的。</p>

<p><strong>onClick={this.changeAge.bind(this)}</strong> 和 <strong>onClick={()=&gt;this.changeAge()}</strong> 可以互换。</p>
</div></div></div><div class="listItem" data-index="42"><div class="listItemContent"><div class="listItemContent-title">43、C 练习实例24&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/cprogramming/c-exercise-example24.html#comment-43089"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>参考方法：</p>
<pre class="prettyprint prettyprinted" style=""><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span><span class="pln">
</span><span class="com">#define</span><span class="pln"> c</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln">b</span><span class="pun">){</span><span class="pln">a</span><span class="pun">=</span><span class="pln">a</span><span class="pun">+</span><span class="pln">b</span><span class="pun">;</span><span class="pln">b</span><span class="pun">=</span><span class="pln">a</span><span class="pun">-</span><span class="pln">b</span><span class="pun">;}</span><span class="pln">
</span><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">float</span><span class="pln"> a</span><span class="pun">=</span><span class="lit">2</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">float</span><span class="pln"> b</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">float</span><span class="pln"> sum</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">for</span><span class="pun">(</span><span class="pln">i</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span><span class="pln">i</span><span class="pun">&lt;=</span><span class="lit">20</span><span class="pun">;</span><span class="pln">i</span><span class="pun">++)</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">{</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum</span><span class="pun">+=</span><span class="pln">a</span><span class="pun">/</span><span class="pln">b</span><span class="pun">;</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln">b</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="pun">}</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;printf</span><span class="pun">(</span><span class="str">"%9.6f"</span><span class="pun">,</span><span class="pln">sum</span><span class="pun">);</span><span class="pln">
&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></pre></div></div></div><div class="listItem" data-index="43"><div class="listItemContent"><div class="listItemContent-title">44、jQuery 遍历 – 过滤&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/jquery/jquery-traversing-filtering.html#comment-43084"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><pre class="prettyprint prettyprinted" style=""><span class="pln">$</span><span class="pun">(</span><span class="str">"p"</span><span class="pun">).</span><span class="pln">filter</span><span class="pun">(</span><span class="str">".url"</span><span class="pun">).</span><span class="pln">css</span><span class="pun">(</span><span class="str">"background-color"</span><span class="pun">,</span><span class="str">"yellow"</span><span class="pun">);</span></pre>

<p>和</p><pre class="prettyprint prettyprinted" style=""><span class="pln">$</span><span class="pun">(</span><span class="str">"p.url"</span><span class="pun">).</span><span class="pln">css</span><span class="pun">(</span><span class="str">"background-color"</span><span class="pun">,</span><span class="str">"yellow"</span><span class="pun">);</span><span class="pln"> </span></pre><p>效果一样。</p></div></div></div><div class="listItem" data-index="44"><div class="listItemContent"><div class="listItemContent-title">45、Go  channel 无缓冲和有缓冲的区别&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="/note/43083"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p data-title="Go  channel 无缓冲和有缓冲的区别"><strong>形象说明一下无缓冲和有缓冲的区别：</strong></p>

<p>无缓冲是同步的，例如 <span class="marked">make(chan int)</span>，就是一个送信人去你家门口送信，你不在家他不走，你一定要接下信，他才会走，无缓冲保证信能到你手上。</p>



<p>有缓冲是异步的，例如 <span class="marked">make(chan int, 1)</span>，就是一个送信人去你家仍到你家的信箱，转身就走，除非你的信箱满了，他必须等信箱空下来，有缓冲的保证信能进你家的邮箱。</p>

    

<p>修改一下上面笔记中的程序如下：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
    </span><span class="str">"fmt"</span><span class="pln">
    </span><span class="str">"time"</span><span class="pln">
</span><span class="pun">)</span><span class="pln">

func sum</span><span class="pun">(</span><span class="pln">s </span><span class="pun">[]</span><span class="kwd">int</span><span class="pun">,</span><span class="pln"> c chan </span><span class="kwd">int</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    sum </span><span class="pun">:=</span><span class="pln"> </span><span class="lit">0</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> _</span><span class="pun">,</span><span class="pln"> v </span><span class="pun">:=</span><span class="pln"> range s </span><span class="pun">{</span><span class="pln">
        sum </span><span class="pun">+=</span><span class="pln"> v
    </span><span class="pun">}</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"sum:"</span><span class="pun">)</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"%#v\n"</span><span class="pun">,</span><span class="pln"> sum</span><span class="pun">)</span><span class="pln">
    c </span><span class="pun">&lt;-</span><span class="pln"> sum </span><span class="com">// 把 sum 发送到通道 c</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"after channel pro"</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// 通道不带缓冲，表示是同步的，只能向通道 c 发送一个数据，只要这个数据没被接收然后所有的发送就被阻塞</span><span class="pln">
func main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    s </span><span class="pun">:=</span><span class="pln"> </span><span class="pun">[]</span><span class="kwd">int</span><span class="pun">{</span><span class="lit">7</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="lit">9</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">}</span><span class="pln">
    c </span><span class="pun">:=</span><span class="pln"> make</span><span class="pun">(</span><span class="pln">chan </span><span class="kwd">int</span><span class="pun">)</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"go [0,3]"</span><span class="pun">)</span><span class="pln">
    go sum</span><span class="pun">(</span><span class="pln">s</span><span class="pun">[:</span><span class="pln">len</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)/</span><span class="lit">2</span><span class="pun">],</span><span class="pln"> c</span><span class="pun">)</span><span class="pln"> </span><span class="com">//a</span><span class="pln">

    </span><span class="com">//这里开启一个新的运行期线程，这个是需要时间的，本程序继续往下走</span><span class="pln">

    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"go [3,6]"</span><span class="pun">)</span><span class="pln">
    go sum</span><span class="pun">(</span><span class="pln">s</span><span class="pun">[</span><span class="pln">len</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)/</span><span class="lit">2</span><span class="pun">:],</span><span class="pln"> c</span><span class="pun">)</span><span class="pln"> </span><span class="com">//b</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"go2 [0,3]"</span><span class="pun">)</span><span class="pln">
    go sum</span><span class="pun">(</span><span class="pln">s</span><span class="pun">[:</span><span class="pln">len</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)/</span><span class="lit">2</span><span class="pun">],</span><span class="pln"> c</span><span class="pun">)</span><span class="pln"> </span><span class="com">//c</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"go2 [3,6]"</span><span class="pun">)</span><span class="pln">
    go sum</span><span class="pun">(</span><span class="pln">s</span><span class="pun">[</span><span class="pln">len</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)/</span><span class="lit">2</span><span class="pun">:],</span><span class="pln"> c</span><span class="pun">)</span><span class="pln"> </span><span class="com">//d</span><span class="pln">

    </span><span class="com">/*
    a b c d和main一起争夺cpu的，他们的执行顺序完全无序，甚至里面不同的语句都相互穿插
    但无缓冲的等待是同步的，所以接下来a b c d都会执行，一直执行到c &lt;- sum后，开始同步阻塞
    因此after channel pro是打印不出来的, 等要打印after channel pro的时候，main就结束了
    */</span><span class="pln">

    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"go3 start waiting..."</span><span class="pun">)</span><span class="pln">
    time</span><span class="pun">.</span><span class="typ">Sleep</span><span class="pun">(</span><span class="lit">1000</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> time</span><span class="pun">.</span><span class="typ">Millisecond</span><span class="pun">)</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"go3 waited 1000 ms"</span><span class="pun">)</span><span class="pln">

    </span><span class="com">//因为a b c d都在管道门口等着，这里度一个，a b c d就继续一个，这个结果的顺序可能是acbd</span><span class="pln">
    aa </span><span class="pun">:=</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln">c
    bb </span><span class="pun">:=</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln">c
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="pln">aa</span><span class="pun">)</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="pln">bb</span><span class="pun">)</span><span class="pln">
    x</span><span class="pun">,</span><span class="pln"> y </span><span class="pun">:=</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln">c</span><span class="pun">,</span><span class="pln"> </span><span class="pun">&lt;-</span><span class="pln">c
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">+</span><span class="pln">y</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></pre>

<p>结果：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">go </span><span class="pun">[</span><span class="lit">0</span><span class="pun">,</span><span class="lit">3</span><span class="pun">]</span><span class="pln">
go </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="lit">6</span><span class="pun">]</span><span class="pln">
go2 </span><span class="pun">[</span><span class="lit">0</span><span class="pun">,</span><span class="lit">3</span><span class="pun">]</span><span class="pln">
go2 </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="lit">6</span><span class="pun">]</span><span class="pln">
sum</span><span class="pun">:</span><span class="pln">sum</span><span class="pun">:</span><span class="pln">sum</span><span class="pun">:</span><span class="lit">17</span><span class="pln">
go3 start waiting</span><span class="pun">...</span><span class="pln">
</span><span class="lit">17</span><span class="pln">
</span><span class="pun">-</span><span class="lit">5</span><span class="pln">
sum</span><span class="pun">:-</span><span class="lit">5</span><span class="pln">
go3 waited </span><span class="lit">1000</span><span class="pln"> ms
</span><span class="lit">17</span><span class="pln">
</span><span class="lit">17</span><span class="pln">
</span><span class="pun">-</span><span class="lit">5</span><span class="pln"> </span><span class="pun">-</span><span class="lit">5</span><span class="pln"> </span><span class="pun">-</span><span class="lit">10</span></pre>

<p>修改成 <span class="marked">make(chan int, 2)</span>，同时合并:</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"sum:"</span><span class="pun">)</span><span class="pln">
fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"%#v\n"</span><span class="pun">,</span><span class="pln"> sum</span><span class="pun">)</span><span class="pln"> </span></pre>
<p>为:</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"sum:%#v\n"</span><span class="pun">,</span><span class="pln"> sum</span><span class="pun">)</span></pre>
<p>可以看到 after channel pro 没有被阻塞了。</p>
<p>结果：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">go </span><span class="pun">[</span><span class="lit">0</span><span class="pun">,</span><span class="lit">3</span><span class="pun">]</span><span class="pln">
go </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="lit">6</span><span class="pun">]</span><span class="pln">
go2 </span><span class="pun">[</span><span class="lit">0</span><span class="pun">,</span><span class="lit">3</span><span class="pun">]</span><span class="pln">
go2 </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="lit">6</span><span class="pun">]</span><span class="pln">
go3 start waiting</span><span class="pun">...</span><span class="pln">
sum</span><span class="pun">:-</span><span class="lit">5</span><span class="pln">
sum</span><span class="pun">:</span><span class="lit">17</span><span class="pln">
after channel pro
after channel pro
sum</span><span class="pun">:</span><span class="lit">17</span><span class="pln">
sum</span><span class="pun">:-</span><span class="lit">5</span><span class="pln">
go3 waited </span><span class="lit">1000</span><span class="pln"> ms
</span><span class="pun">-</span><span class="lit">5</span><span class="pln">
</span><span class="lit">17</span><span class="pln">
</span><span class="lit">17</span><span class="pln"> </span><span class="pun">-</span><span class="lit">5</span><span class="pln"> </span><span class="lit">12</span></pre></div></div></div><div class="listItem" data-index="45"><div class="listItemContent"><div class="listItemContent-title">46、Python 数组翻转指定个数的元素&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/python3/python3-array-rotation.html#comment-43058"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>参考方法：</p>
<pre class="prettyprint prettyprinted" style=""><span class="kwd">def</span><span class="pln"> rotateList</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln">d</span><span class="pun">,</span><span class="pln">n</span><span class="pun">):</span><span class="pln">
    temp</span><span class="pun">=[]</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> i </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln">d</span><span class="pun">):</span><span class="pln">
        temp</span><span class="pun">.</span><span class="pln">append</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">])</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> i </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln">n</span><span class="pun">-</span><span class="pln">d</span><span class="pun">):</span><span class="pln">
        arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]=</span><span class="pln">arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">+</span><span class="pln">d</span><span class="pun">]</span><span class="pln">
    arr</span><span class="pun">=</span><span class="pln">arr</span><span class="pun">[</span><span class="lit">0</span><span class="pun">:</span><span class="pln">n</span><span class="pun">-</span><span class="pln">d</span><span class="pun">]</span><span class="pln">
    arr</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">(</span><span class="pln">temp</span><span class="pun">)</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln">  arr
arr</span><span class="pun">=[</span><span class="pln">x </span><span class="kwd">for</span><span class="pln"> x </span><span class="kwd">in</span><span class="pln"> range</span><span class="pun">(</span><span class="lit">1</span><span class="pun">,</span><span class="lit">8</span><span class="pun">)]</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">)</span><span class="pln">
arrRotate</span><span class="pun">=</span><span class="pln">rotateList</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">7</span><span class="pun">)</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="pln">arrRotate</span><span class="pun">)</span></pre>
</div></div></div><div class="listItem" data-index="46"><div class="listItemContent"><div class="listItemContent-title">47、Linux useradd命令&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/linux/linux-comm-useradd.html#comment-43055"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><pre class="prettyprint prettyprinted" style=""><span class="com">#添加一个不能登录的用户</span><span class="pln">
useradd </span><span class="pun">-</span><span class="pln">d </span><span class="pun">/</span><span class="pln">usr</span><span class="pun">/</span><span class="kwd">local</span><span class="pun">/</span><span class="pln">apache </span><span class="pun">-</span><span class="pln">g apache </span><span class="pun">-</span><span class="pln">s </span><span class="pun">/</span><span class="pln">bin</span><span class="pun">/</span><span class="kwd">false</span><span class="pln"> apache</span></pre>
<p>要拒绝系统用户登录，可以将其 shell 设置为 /usr/sbin/nologin 或者 /bin/false。</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">usermod </span><span class="pun">-</span><span class="pln">s </span><span class="pun">|</span><span class="pln"> </span><span class="pun">--</span><span class="pln">shell </span><span class="pun">/</span><span class="pln">usr</span><span class="pun">/</span><span class="pln">sbin</span><span class="pun">/</span><span class="pln">nologin username</span></pre>
<p>或者</p>

<pre class="prettyprint prettyprinted" style=""><span class="pln">usermod </span><span class="pun">-</span><span class="pln">s </span><span class="pun">|</span><span class="pln"> </span><span class="pun">-</span><span class="pln">shell </span><span class="pun">/</span><span class="pln">bin</span><span class="pun">/</span><span class="kwd">false</span><span class="pln"> username</span></pre>
<p><strong>说明及比较：</strong></p>

<pre class="prettyprint prettyprinted" style=""><span class="str">/bin/</span><span class="kwd">false</span></pre>

<p>/bin/false 什么也不做只是返回一个错误状态，然后立即退出。将用户的 shell 设置为 /bin/false，用户会无法登录，并且不会有任何提示。</p>

<pre class="prettyprint prettyprinted" style=""><span class="str">/usr/</span><span class="pln">sbin</span><span class="pun">/</span><span class="pln">nologin</span></pre>

<p>nologin 会礼貌的向用户显示一条信息，并拒绝用户登录：</p>

<pre class="prettyprint prettyprinted" style=""><span class="typ">This</span><span class="pln"> account </span><span class="kwd">is</span><span class="pln"> currently </span><span class="kwd">not</span><span class="pln"> available</span><span class="pun">.</span></pre>

<p>有一些软件，比如一些 ftp 服务器软件，对于本地非虚拟账户，只有用户有有效的 shell 才能使用 ftp 服务。这时候就可以使用 nologin 使用户即不能登录系统，还能使用一些系统服务，比如 ftp 服务。/bin/false 则不行，这是二者的重要区别之一。</p>

<pre class="prettyprint prettyprinted" style=""><span class="str">/etc/</span><span class="pln">nologin</span></pre>

<p>如果存在 /etc/nologin 文件，则系统只允许 root 用户登录，其他用户全部被拒绝登录，并向他们显示 /etc/nologin 文件的内容。</p></div></div></div><div class="listItem" data-index="47"><div class="listItemContent"><div class="listItemContent-title">48、Go 错误处理&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/go/go-error-handling.html#comment-43054"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>个人多次试验，总结几点 panic，defer 和 recover。</p>
<ul><li>
1、panic 在没有用 recover 前以及在 recover 捕获那一级函数栈，panic 之后的代码均不会执行；一旦被 recover 捕获后，外层的函数栈代码恢复正常，所有代码均会得到执行；
</li><li>
2、panic 后，不再执行后面的代码，立即按照逆序执行 defer，并逐级往外层函数栈扩散；defer 就类似 finally；
</li><li>
3、利用 recover 捕获 panic 时，defer 需要再 panic 之前声明，否则由于 panic 之后的代码得不到执行，因此也无法 recover；
</li></ul>
<pre class="prettyprint prettyprinted" style=""><span class="kwd">package</span><span class="pln"> main

</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
</span><span class="str">"fmt"</span><span class="pln">
</span><span class="pun">)</span><span class="pln">

func main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层开始"</span><span class="pun">)</span><span class="pln">
  defer func</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层准备recover"</span><span class="pun">)</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> err </span><span class="pun">:=</span><span class="pln"> recover</span><span class="pun">();</span><span class="pln"> err </span><span class="pun">!=</span><span class="pln"> </span><span class="kwd">nil</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"%#v-%#v\n"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"外层"</span><span class="pun">,</span><span class="pln"> err</span><span class="pun">)</span><span class="pln"> </span><span class="com">// err已经在上一级的函数中捕获了，这里没有异常，只是例行先执行defer，然后执行后面的代码</span><span class="pln">
    </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层没做啥事"</span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层完成recover"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}()</span><span class="pln">
  fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层即将异常"</span><span class="pun">)</span><span class="pln">
  f</span><span class="pun">()</span><span class="pln">
  fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层异常后"</span><span class="pun">)</span><span class="pln">
  defer func</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"外层异常后defer"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}()</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

func f</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层开始"</span><span class="pun">)</span><span class="pln">
  defer func</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层recover前的defer"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}()</span><span class="pln">

  defer func</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层准备recover"</span><span class="pun">)</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> err </span><span class="pun">:=</span><span class="pln"> recover</span><span class="pun">();</span><span class="pln"> err </span><span class="pun">!=</span><span class="pln"> </span><span class="kwd">nil</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      fmt</span><span class="pun">.</span><span class="typ">Printf</span><span class="pun">(</span><span class="str">"%#v-%#v\n"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"内层"</span><span class="pun">,</span><span class="pln"> err</span><span class="pun">)</span><span class="pln"> </span><span class="com">// 这里err就是panic传入的内容</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层完成recover"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}()</span><span class="pln">

  defer func</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层异常前recover后的defer"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}()</span><span class="pln">

  panic</span><span class="pun">(</span><span class="str">"异常信息"</span><span class="pun">)</span><span class="pln">

  defer func</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层异常后的defer"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}()</span><span class="pln">

  fmt</span><span class="pun">.</span><span class="typ">Println</span><span class="pun">(</span><span class="str">"内层异常后语句"</span><span class="pun">)</span><span class="pln"> </span><span class="com">//recover捕获的一级或者完全不捕获这里开始下面代码不会再执行</span><span class="pln">
</span><span class="pun">}</span></pre>

<p>代码执行的结果：</p>

<pre class="prettyprint prettyprinted" style=""><span class="pun">外层开始</span><span class="pln">
</span><span class="pun">外层即将异常</span><span class="pln">
</span><span class="pun">内层开始</span><span class="pln">
</span><span class="pun">内层异常前</span><span class="pln">recover</span><span class="pun">后的</span><span class="pln">defer
</span><span class="pun">内层准备</span><span class="pln">recover
</span><span class="str">"内层"</span><span class="pun">-</span><span class="str">"异常信息"</span><span class="pln">
</span><span class="pun">内层完成</span><span class="pln">recover
</span><span class="pun">内层</span><span class="pln">recover</span><span class="pun">前的</span><span class="pln">defer
</span><span class="pun">外层异常后</span><span class="pln">
</span><span class="pun">外层异常后</span><span class="pln">defer
</span><span class="pun">外层准备</span><span class="pln">recover
</span><span class="pun">外层没做啥事</span><span class="pln">
</span><span class="pun">外层完成</span><span class="pln">recover</span></pre></div></div></div><div class="listItem" data-index="48"><div class="listItemContent"><div class="listItemContent-title">49、Kotlin 基础语法&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/kotlin/kotlin-basic-syntax.html#comment-43049"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>输入两个数据进行相乘：</p>

<pre class="prettyprint prettyprinted" style=""><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">lang</span><span class="pun">.</span><span class="typ">Integer</span><span class="pun">.</span><span class="pln">parseInt
</span><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.*</span><span class="pln">
fun main</span><span class="pun">(</span><span class="pln">args</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">&lt;</span><span class="typ">String</span><span class="pun">&gt;)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="com">//    Greeter("me!").greet()          </span><span class="pln">
  </span><span class="com">// 创建一个对象不用 new 关键字    </span><span class="pln">
  println</span><span class="pun">(</span><span class="str">"请输入一个整数："</span><span class="pun">)</span><span class="pln">    
  val scannerX </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Scanner</span><span class="pun">(</span><span class="typ">System</span><span class="pun">.</span><span class="str">\`in\`</span><span class="pun">)</span><span class="pln">
  val x </span><span class="pun">=</span><span class="pln"> scannerX</span><span class="pun">.</span><span class="kwd">next</span><span class="pun">().</span><span class="pln">toString</span><span class="pun">()</span><span class="pln"> 
  println</span><span class="pun">(</span><span class="str">"请输入另一个整数："</span><span class="pun">)</span><span class="pln">  
  val scannerY </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Scanner</span><span class="pun">(</span><span class="typ">System</span><span class="pun">.</span><span class="str">\`in\`</span><span class="pun">)</span><span class="pln"> 
  val y </span><span class="pun">=</span><span class="pln"> scannerY</span><span class="pun">.</span><span class="kwd">next</span><span class="pun">().</span><span class="pln">toString</span><span class="pun">()</span><span class="pln">    </span><span class="com">//直接使用 x*y会导致错误   </span><span class="pln">
  val s </span><span class="pun">=</span><span class="pln"> parseInt</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)*</span><span class="pln">parseInt</span><span class="pun">(</span><span class="pln">y</span><span class="pun">)!!.</span><span class="pln">toInt</span><span class="pun">()</span><span class="pln">  
  println</span><span class="pun">(</span><span class="str">"两数乘积为："</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> s</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">())</span><span class="pln">
</span><span class="pun">}</span></pre>
</div></div></div><div class="listItem listItem-last" data-index="49"><div class="listItemContent"><div class="listItemContent-title">50、React AJAX&nbsp; <i class="fa fa-plus-square" aria-hidden="true"></i><a target="_blank" href="http://www.runoob.com/react/react-ajax.html#comment-43042"><i style="float:right" class="fa fa-external-link"></i></a></div><div class="listItemContent-content"><p>也可以在初始化的时候定义 source，但是获取的时候 要用 this.state.source，这个时候这里不是属性了，不能用 prop。</p>

<pre class="prettyprint prettyprinted" style=""><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"example"</span><span class="tag">&gt;&lt;/div&gt;</span><span class="pln">

</span><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text/babel"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">UserGist</span><span class="pln"> extends </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">username</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pun">,</span><span class="pln"> lastGistUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pun">,</span><span class="pln">source</span><span class="pun">:</span><span class="str">'https://api.github.com/users/octocat/gists'</span><span class="pun">};</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

 
  componentDidMount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">serverRequest </span><span class="pun">=</span><span class="pln"> $</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">source</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">result</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">var</span><span class="pln"> lastGist </span><span class="pun">=</span><span class="pln"> result</span><span class="pun">[</span><span class="lit">0</span><span class="pun">];</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
        username</span><span class="pun">:</span><span class="pln"> lastGist</span><span class="pun">.</span><span class="pln">owner</span><span class="pun">.</span><span class="pln">login</span><span class="pun">,</span><span class="pln">
        lastGistUrl</span><span class="pun">:</span><span class="pln"> lastGist</span><span class="pun">.</span><span class="pln">html_url
      </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">));</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
 
  componentWillUnmount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">serverRequest</span><span class="pun">.</span><span class="pln">abort</span><span class="pun">();</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
 
  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">username</span><span class="pun">}</span><span class="pln"> </span><span class="pun">用户最新的</span><span class="pln"> </span><span class="typ">Gist</span><span class="pln"> </span><span class="pun">共享地址：</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">a href</span><span class="pun">=</span><span class="str">"{this.state.lastGistUrl}"</span><span class="pln"> rel</span><span class="pun">=</span><span class="str">"nofollow"</span><span class="pun">&gt;{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">lastGistUrl</span><span class="pun">}&lt;/</span><span class="pln">a</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
 
</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="typ">UserGist</span><span class="pln"> </span><span class="pun">/&gt;,</span><span class="pln">
  document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'example'</span><span class="pun">)</span><span class="pln">
</span><span class="pun">);</span><span class="pln">
</span><span class="tag">&lt;/script&gt;</span></pre>
<style>
#list {
    margin: 0 4px 0;
    overflow-x: hidden;
    overflow-y: auto;
}
.listItem {
    position: relative;
    padding-left: 40px;
    padding-top: 4px;
}
.listItem:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    border-right: 1px solid;
    left: 19px;
    z-index: 1;
}
.listItem-first:before {
    height: 50%;
    top: 50%;
}
.listItem-last:before {
    height: 50%;
}
.listItem:after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    left: 16px;
    top: 50%;
    margin-top: -2px;
    z-index: 1;
}
.listItem.highlight:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 4px solid;
    border-radius: 8px;
    left: 12px;
   
    z-index: 2;
}

.listItemContent {
    padding: 10px;
    border: 1px solid;
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px;
    box-shadow: 0 1px 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.listItemContent-title {
    font-size: 16px;
    font-weight: bold;
}

</style>

</div>
</div>
</div>
</div>

</body></html>
`
}
module.exports = {
    getnotescontent
}