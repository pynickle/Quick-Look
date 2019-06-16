const vscode = require("vscode");
//const $ = require("jquery");
function activate(context) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.look-pep8', () => {
		const panel = vscode.window.createWebviewPanel('look pep8', 'Look PEP8', vscode.ViewColumn.One, {});
		panel.webview.html = getWebviewContent();
	}));
}
exports.activate = activate;

function getWebviewContent() {
    return `
<!DOCTYPE html>
<html>

<body>
    <h1>PEP 8 - Style Guide for Python Code</h1>
    <h1 id="introduction">Introduction</h1>
    <p>This document gives coding conventions for the Python code comprising the standard library in the main Python
        distribution. Please see the companion informational PEP describing style guidelines for the C code in the C
        implementation of Python <a href="#fn1" class="footnoteRef" id="fnref1"><sup>1</sup></a>.</p>
    <p>This document and PEP 257 (Docstring Conventions) were adapted from Guido’s original Python Style Guide essay,
        with some additions from Barry’s style guide <a href="#fn2" class="footnoteRef" id="fnref2"><sup>2</sup></a>.
    </p>
    <p>This style guide evolves over time as additional conventions are identified and past conventions are rendered
        obsolete by changes in the language itself.</p>
    <p>Many projects have their own coding style guidelines. In the event of any conflicts, such project-specific guides
        take precedence for that project.</p>
    <h1 id="a-foolish-consistency-is-the-hobgoblin-of-little-minds">A Foolish Consistency is the Hobgoblin of Little
        Minds</h1>
    <p>One of Guido’s key insights is that code is read much more often than it is written. The guidelines provided here
        are intended to improve the readability of code and make it consistent across the wide spectrum of Python code.
        As PEP 20 says, “Readability counts”.</p>
    <p>A style guide is about consistency. Consistency with this style guide is important. Consistency within a project
        is more important. Consistency within one module or function is most important.</p>
    <p>But most importantly: know when to be inconsistent – sometimes the style guide just doesn’t apply. When in doubt,
        use your best judgment. Look at other examples and decide what looks best. And don’t hesitate to ask!</p>
    <p>In particular: do not break backwards compatibility just to comply with this PEP!</p>
    <p>Some other good reasons to ignore a particular guideline:</p>
    <ol style="list-style-type: decimal">
        <li>When applying the guideline would make the code less readable, even for someone who is used to reading code
            that follows this PEP.</li>
        <li>To be consistent with surrounding code that also breaks it (maybe for historic reasons) – although this is
            also an opportunity to clean up someone else’s mess (in true XP style).</li>
        <li>Because the code in question predates the introduction of the guideline and there is no other reason to be
            modifying that code.</li>
        <li>When the code needs to remain compatible with older versions of Python that don’t support the feature
            recommended by the style guide.</li>
    </ol>
    <h1 id="code-lay-out">Code lay-out</h1>
    <h2 id="indentation">Indentation</h2>
    <p>Use 4 spaces per indentation level.</p>
    <p>Continuation lines should align wrapped elements either vertically using Python’s implicit line joining inside
        parentheses, brackets and braces, or using a <em>hanging indent</em> <a href="#fn3" class="footnoteRef"
            id="fnref3"><sup>3</sup></a>. When using a hanging indent the following considerations should be applied;
        there should be no arguments on the first line and further indentation should be used to clearly distinguish
        itself as a continuation line.</p>
    <p class="yes"><span>Yes:</span></p>
    <pre><code>
# Aligned with opening delimiter.
foo = long_function_name(var_one, var_two,
                            var_three, var_four)

# More indentation included to distinguish this from the rest.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)

# Hanging indents should add a level.
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)
        </code></pre>
    <p class="no"><span>No:</span></p>
    <pre><code>
# Arguments on first line forbidden when not using vertical alignment.
foo = long_function_name(var_one, var_two,
    var_three, var_four)

# Further indentation required as indentation is not distinguishable.
def long_function_name(
    var_one, var_two, var_three,
    var_four):
    print(var_one)
    </code></pre>
    <p>The 4-space rule is optional for continuation lines.</p>
    <p>Optional:</p>
    <pre><code>
# Hanging indents *may* be indented to other than 4 spaces.
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)
            </code></pre>
    <p>When the conditional part of an <code>if</code>-statement is long enough to require that it be written across
        multiple lines, it’s worth noting that the combination of a two character keyword (i.e. <code>if</code>), plus a
        single space, plus an opening parenthesis creates a natural 4-space indent for the subsequent lines of the
        multiline conditional. This can produce a visual conflict with the indented suite of code nested inside the
        <code>if</code>-statement, which would also naturally be indented to 4 spaces. This PEP takes no explicit
        position on how (or whether) to further visually distinguish such conditional lines from the nested suite inside
        the <code>if</code>-statement. Acceptable options in this situation include, but are not limited to:</p>
    <pre><code>
# No extra indentation.
if (this_is_one_thing and
    that_is_another_thing):
    do_something()

# Add a comment, which will provide some distinction in editors
# supporting syntax highlighting.
if (this_is_one_thing and
    that_is_another_thing):
    # Since both conditions are true, we can frobnicate.
    do_something()

# Add some extra indentation on the conditional continuation line.
if (this_is_one_thing
        and that_is_another_thing):
    do_something()
    </code></pre>
    <p>The closing brace/bracket/parenthesis on multi-line constructs may either line up under the first non-whitespace
        character of the last line of list, as in:</p>
    <pre><code>
my_list = [
    1, 2, 3,
    4, 5, 6,
]
result = some_function_that_takes_arguments(
    &#39;a&#39;, &#39;b&#39;, &#39;c&#39;,
    &#39;d&#39;, &#39;e&#39;, &#39;f&#39;,
)
    </code></pre>
    <p>or it may be lined up under the first character of the line that starts the multi-line construct, as in:</p>
    <pre><code>
my_list = [
    1, 2, 3,
    4, 5, 6,
]
result = some_function_that_takes_arguments(
    &#39;a&#39;, &#39;b&#39;, &#39;c&#39;,
    &#39;d&#39;, &#39;e&#39;, &#39;f&#39;,
)
    </code></pre>
    <h2 id="tabs-or-spaces">Tabs or Spaces?</h2>
    <p>Spaces are the preferred indentation method.</p>
    <p>Tabs should be used solely to remain consistent with code that is already indented with tabs.</p>
    <p>Python 3 disallows mixing the use of tabs and spaces for indentation.</p>
    <p>Python 2 code indented with a mixture of tabs and spaces should be converted to using spaces exclusively.</p>
    <p>When invoking the Python 2 command line interpreter with the <code>-t</code> option, it issues warnings about
        code that illegally mixes tabs and spaces. When using <code>-tt</code> these warnings become errors. These
        options are highly recommended!</p>
    <h2 id="maximum-line-length">Maximum Line Length</h2>
    <p>Limit all lines to a maximum of 79 characters.</p>
    <p>For flowing long blocks of text with fewer structural restrictions (docstrings or comments), the line length
        should be limited to 72 characters.</p>
    <p>Limiting the required editor window width makes it possible to have several files open side-by-side, and works
        well when using code review tools that present the two versions in adjacent columns.</p>
    <p>The default wrapping in most tools disrupts the visual structure of the code, making it more difficult to
        understand. The limits are chosen to avoid wrapping in editors with the window width set to 80, even if the tool
        places a marker glyph in the final column when wrapping lines. Some web based tools may not offer dynamic line
        wrapping at all.</p>
    <p>Some teams strongly prefer a longer line length. For code maintained exclusively or primarily by a team that can
        reach agreement on this issue, it is okay to increase the nominal line length from 80 to 100 characters
        (effectively increasing the maximum length to 99 characters), provided that comments and docstrings are still
        wrapped at 72 characters.</p>
    <p>The Python standard library is conservative and requires limiting lines to 79 characters (and docstrings/comments
        to 72).</p>
    <p>The preferred way of wrapping long lines is by using Python’s implied line continuation inside parentheses,
        brackets and braces. Long lines can be broken over multiple lines by wrapping expressions in parentheses. These
        should be used in preference to using a backslash for line continuation.</p>
    <p>Backslashes may still be appropriate at times. For example, long, multiple <code>with</code>-statements cannot
        use implicit continuation, so backslashes are acceptable:</p>
    <pre><code>with open(&#39;/path/to/some/file/you/want/to/read&#39;) as file_1, \
                    open(&#39;/path/to/some/file/being/written&#39;, &#39;w&#39;) as file_2:
                file_2.write(file_1.read())</code></pre>
    <p>(See the previous discussion on multiline if-statements_ for further thoughts on the indentation of such
        multiline <code>with</code>-statements.)</p>
    <p>Another such case is with <code>assert</code> statements.</p>
    <p>Make sure to indent the continued line appropriately. The preferred place to break around a binary operator is
        <em>after</em> the operator, not before it. Some examples:</p>
    <pre><code>
class Rectangle(Blob):
    
    def __init__(self, width, height,
                    color=&#39;black&#39;, emphasis=None, highlight=0):
        if (width == 0 and height == 0 and
                color == &#39;red&#39; and emphasis == &#39;strong&#39; or
                highlight &gt; 100):
            raise ValueError(&quot;sorry, you lose&quot;)
        if width == 0 and height == 0 and (color == &#39;red&#39; or
                                            emphasis is None):
            raise ValueError(&quot;I don&#39;t think so -- values are %s, %s&quot; %
                                (width, height))
        Blob.__init__(self, width, height,
                        color, emphasis, highlight)
    </code></pre>
    <h2 id="blank-lines">Blank Lines</h2>
    <p>Surround top-level function and class definitions with two blank lines.</p>
    <p>Method definitions inside a class are surrounded by a single blank line.</p>
    <p>Extra blank lines may be used (sparingly) to separate groups of related functions. Blank lines may be omitted
        between a bunch of related one-liners (e.g. a set of dummy implementations).</p>
    <p>Use blank lines in functions, sparingly, to indicate logical sections.</p>
    <p>Python accepts the control-L (i.e. ^L) form feed character as whitespace; Many tools treat these characters as
        page separators, so you may use them to separate pages of related sections of your file. Note, some editors and
        web-based code viewers may not recognize control-L as a form feed and will show another glyph in its place.</p>
    <h2 id="source-file-encoding">Source File Encoding</h2>
    <p>Code in the core Python distribution should always use UTF-8 (or ASCII in Python 2).</p>
    <p>Files using ASCII (in Python 2) or UTF-8 (in Python 3) should not have an encoding declaration.</p>
    <p>In the standard library, non-default encodings should be used only for test purposes or when a comment or
        docstring needs to mention an author name that contains non-ASCII characters; otherwise, using <code>\\x</code>,
        <code>\\u</code>, <code>\\U</code>, or <code>\\N</code> escapes is the preferred way to include non-ASCII data
        in
        string literals.</p>
    <p>For Python 3.0 and beyond, the following policy is prescribed for the standard library (see PEP 3131): All
        identifiers in the Python standard library MUST use ASCII-only identifiers, and SHOULD use English words
        wherever feasible (in many cases, abbreviations and technical terms are used which aren’t English). In addition,
        string literals and comments must also be in ASCII. The only exceptions are (a) test cases testing the non-ASCII
        features, and (b) names of authors. Authors whose names are not based on the latin alphabet MUST provide a latin
        transliteration of their names.</p>
    <p>Open source projects with a global audience are encouraged to adopt a similar policy.</p>
    <h2 id="imports">Imports</h2>
    <ul>
        <li>
            <p>Imports should usually be on separate lines, e.g.:</p>
            <pre><code>
Yes: 
import os
import sys

No:  
import sys, os
            </code></pre>
            <p>It’s okay to say this though:</p>
            <pre><code>from subprocess import Popen, PIPE</code></pre>
        </li>
        <li>
            <p>Imports are always put at the top of the file, just after any module comments and docstrings, and before
                module globals and constants.</p>
            <p>Imports should be grouped in the following order:</p>
            <ol style="list-style-type: decimal">
                <li>standard library imports</li>
                <li>related third party imports</li>
                <li>local application/library specific imports</li>
            </ol>
            <p>You should put a blank line between each group of imports.</p>
            <p>Put any relevant <code>__all__</code> specification after the imports.</p>
        </li>
        <li>
            <p>Absolute imports are recommended, as they are usually more readable and tend to be better behaved (or at
                least give better error messages) if the import system is incorrectly configured (such as when a
                directory inside a package ends up on <code>sys.path</code>):</p>
            <pre><code>
import mypkg.sibling
from mypkg import sibling
from mypkg.sibling import example
            </code></pre>
            <p>However, explicit relative imports are an acceptable alternative to absolute imports, especially when
                dealing with complex package layouts where using absolute imports would be unnecessarily verbose:</p>
            <pre><code>
from . import sibling
from .sibling import example
            </code></pre>
            <p>Standard library code should avoid complex package layouts and always use absolute imports.</p>
            <p>Implicit relative imports should <em>never</em> be used and have been removed in Python 3.</p>
        </li>
        <li>
            <p>When importing a class from a class-containing module, it’s usually okay to spell this:</p>
            <pre><code>
from myclass import MyClass
from foo.bar.yourclass import YourClass
            </code></pre>
            <p>If this spelling causes local name clashes, then spell them :</p>
            <pre><code>
import myclass
import foo.bar.yourclass
            </code></pre>
            <p>and use “myclass.MyClass” and “foo.bar.yourclass.YourClass”.</p>
        </li>
        <li>
            <p>Wildcard imports (<code>from &lt;module&gt; import *</code>) should be avoided, as they make it unclear
                which names are present in the namespace, confusing both readers and many automated tools. There is one
                defensible use case for a wildcard import, which is to republish an internal interface as part of a
                public API (for example, overwriting a pure Python implementation of an interface with the definitions
                from an optional accelerator module and exactly which definitions will be overwritten isn’t known in
                advance).</p>
            <p>When republishing names this way, the guidelines below regarding public and internal interfaces still
                apply.</p>
        </li>
    </ul>
    <h1 id="string-quotes">String Quotes</h1>
    <p>In Python, single-quoted strings and double-quoted strings are the same. This PEP does not make a recommendation
        for this. Pick a rule and stick to it. When a string contains single or double quote characters, however, use
        the other one to avoid backslashes in the string. It improves readability.</p>
    <p>For triple-quoted strings, always use double quote characters to be consistent with the docstring convention in
        PEP 257.</p>
    <h1 id="whitespace-in-expressions-and-statements">Whitespace in Expressions and Statements</h1>
    <h2 id="pet-peeves">Pet Peeves</h2>
    <p>Avoid extraneous whitespace in the following situations:</p>
    <ul>
        <li>
            <p>Immediately inside parentheses, brackets or braces. :</p>
            <pre><code>
Yes: 
spam(ham[1], {eggs: 2})
No:  
spam( ham[ 1 ], { eggs: 2 } )
            </code></pre>
        </li>
        <li>
            <p>Immediately before a comma, semicolon, or colon:</p>
            <pre><code>
Yes: 
if x == 4: print x, y; x, y = y, x
No:  
if x == 4 : print x , y ; x , y = y , x
            </code></pre>
        </li>
        <li>
            <p>However, in a slice the colon acts like a binary operator, and should have equal amounts on either side
                (treating it as the operator with the lowest priority). In an extended slice, both colons must have the
                same amount of spacing applied. Exception: when a slice parameter is omitted, the space is omitted.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>
ham[1:9], ham[1:9:3], ham[:9:3], ham[1::3], ham[1:9:]
ham[lower:upper], ham[lower:upper:], ham[lower::step]
ham[lower+offset : upper+offset]
ham[: upper_fn(x) : step_fn(x)], ham[:: step_fn(x)]
ham[lower + offset : upper + offset]
            </code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
            ham[lower + offset:upper + offset]
            ham[1: 9], ham[1 :9], ham[1:9 :3]
            ham[lower : : upper]
            ham[ : upper]
            </code></pre>
        </li>
        <li>
            <p>Immediately before the open parenthesis that starts the argument list of a function call:</p>
            <pre><code>
            Yes: 
            spam(1)
            No:  
            spam (1)
            </code></pre>
        </li>
        <li>
            <p>Immediately before the open parenthesis that starts an indexing or slicing:</p>
            <pre><code>
            Yes: 
            dct[&#39;key&#39;] = lst[index]
            No:  
            dct [&#39;key&#39;] = lst [index]
            </code></pre>
        </li>
        <li>
            <p>More than one space around an assignment (or other) operator to align it with another.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>x = 1
            y = 2
            long_variable = 3</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
            x             = 1
            y             = 2
            long_variable = 3
            </code></pre>
        </li>
    </ul>
    <h2 id="other-recommendations">Other Recommendations</h2>
    <ul>
        <li>Avoid trailing whitespace anywhere. Because it’s usually invisible, it can be confusing: e.g. a backslash
            followed by a space and a newline does not count as a line continuation marker. Some editors don’t preserve
            it and many projects (like CPython itself) have pre-commit hooks that reject it.</li>
        <li>Always surround these binary operators with a single space on either side: assignment (<code>=</code>),
            augmented assignment (<code>+=</code>, <code>-=</code> etc.), comparisons (<code>==</code>,
            <code>&lt;</code>, <code>&gt;</code>, <code>!=</code>, <code>&lt;&gt;</code>, <code>&lt;=</code>,
            <code>&gt;=</code>, <code>in</code>, <code>not in</code>, <code>is</code>, <code>is not</code>), Booleans
            (<code>and</code>, <code>or</code>, <code>not</code>).</li>
        <li>
            <p>If operators with different priorities are used, consider adding whitespace around the operators with the
                lowest priority(ies). Use your own judgment; however, never use more than one space, and always have the
                same amount of whitespace on both sides of a binary operator.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>i = i + 1
            submitted += 1
            x = x*2 - 1
            hypot2 = x*x + y*y
            c = (a+b) * (a-b)</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
            i=i+1
            submitted +=1
            x = x * 2 - 1
            hypot2 = x * x + y * y
            c = (a + b) * (a - b)</code></pre>
        </li>
        <li>
            <p>Don’t use spaces around the <code>=</code> sign when used to indicate a keyword argument or a default
                parameter value.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>def complex(real, imag=0.0):
                return magic(r=real, i=imag)</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
            def complex(real, imag = 0.0):
                return magic(r = real, i = imag)</code></pre>
        </li>
        <li>
            <p>Function annotations should use the normal rules for colons and always have spaces around the
                <code>-&gt;</code> arrow if present. (See Function Annotations_ below for more about function
                annotations.)</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>
            def munge(input: AnyStr): ...
            def munge() -&gt; AnyStr: ...</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
            def munge(input:AnyStr): ...
            def munge()-&gt;PosInt: ...</code></pre>
        </li>
        <li>
            <p>When combining an argument annotation with a default value, use spaces around the <code>=</code> sign
                (but only for those arguments that have both an annotation and a default).</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>
            def munge(sep: AnyStr = None): ...
            def munge(input: AnyStr, sep: AnyStr = None, limit=1000): ...</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
            def munge(input: AnyStr=None): ...
            def munge(input: AnyStr, limit = 1000): ...</code></pre>
        </li>
        <li>
            <p>Compound statements (multiple statements on the same line) are generally discouraged.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>
if foo == &#39;blah&#39;:
    do_blah_thing()
do_one()
do_two()
do_three()</code></pre>
            <p>Rather not:</p>
            <pre><code>
if foo == &#39;blah&#39;: do_blah_thing()
do_one(); do_two(); do_three()</code></pre>
        </li>
        <li>
            <p>While sometimes it’s okay to put an if/for/while with a small body on the same line, never do this for
                multi-clause statements. Also avoid folding such long lines!</p>
            <p>Rather not:</p>
            <pre><code>
if foo == &#39;blah&#39;: do_blah_thing()
for x in lst: total += x
while t &lt; 10: t = delay()</code></pre>
            <p>Definitely not:</p>
            <pre><code>
if foo == &#39;blah&#39;: do_blah_thing()
else: do_non_blah_thing()

try: something()
finally: cleanup()

do_one(); do_two(); do_three(long, argument,
                                list, like, this)

if foo == &#39;blah&#39;: one(); two(); three()</code></pre>
        </li>
    </ul>
    <h1 id="comments">Comments</h1>
    <p>Comments that contradict the code are worse than no comments. Always make a priority of keeping the comments
        up-to-date when the code changes!</p>
    <p>Comments should be complete sentences. If a comment is a phrase or sentence, its first word should be
        capitalized, unless it is an identifier that begins with a lower case letter (never alter the case of
        identifiers!).</p>
    <p>If a comment is short, the period at the end can be omitted. Block comments generally consist of one or more
        paragraphs built out of complete sentences, and each sentence should end in a period.</p>
    <p>You should use two spaces after a sentence-ending period.</p>
    <p>When writing English, follow Strunk and White.</p>
    <p>Python coders from non-English speaking countries: please write your comments in English, unless you are 120%
        sure that the code will never be read by people who don’t speak your language.</p>
    <h2 id="block-comments">Block Comments</h2>
    <p>Block comments generally apply to some (or all) code that follows them, and are indented to the same level as
        that code. Each line of a block comment starts with a <code>#</code> and a single space (unless it is indented
        text inside the comment).</p>
    <p>Paragraphs inside a block comment are separated by a line containing a single <code>#</code>.</p>
    <h2 id="inline-comments">Inline Comments</h2>
    <p>Use inline comments sparingly.</p>
    <p>An inline comment is a comment on the same line as a statement. Inline comments should be separated by at least
        two spaces from the statement. They should start with a # and a single space.</p>
    <p>Inline comments are unnecessary and in fact distracting if they state the obvious. Don’t do this:</p>
    <pre><code>
x = x + 1                 # Increment x</code></pre>
    <p>But sometimes, this is useful:</p>
    <pre><code>
x = x + 1                 # Compensate for border</code></pre>
    <h2 id="documentation-strings">Documentation Strings</h2>
    <p>Conventions for writing good documentation strings (a.k.a. “docstrings”) are immortalized in PEP 257.</p>
    <ul>
        <li>Write docstrings for all public modules, functions, classes, and methods. Docstrings are not necessary for
            non-public methods, but you should have a comment that describes what the method does. This comment should
            appear after the <code>def</code> line.</li>
        <li>
            <p>PEP 257 describes good docstring conventions. Note that most importantly, the
                <code>&quot;&quot;&quot;</code> that ends a multiline docstring should be on a line by itself, e.g.:</p>
            <pre><code>&quot;&quot;&quot;Return a foobang
            
            Optional plotz says to frobnicate the bizbaz first.
            &quot;&quot;&quot;</code></pre>
        </li>
        <li>For one liner docstrings, please keep the closing <code>&quot;&quot;&quot;</code> on the same line.</li>
    </ul>
    <h1 id="version-bookkeeping">Version Bookkeeping</h1>
    <p>If you have to have Subversion, CVS, or RCS crud in your source file, do it as follows. :</p>
    <pre><code>
__version__ = &quot;$Revision$&quot;
        # $Source$</code></pre>
    <p>These lines should be included after the module’s docstring, before any other code, separated by a blank line
        above and below.</p>
    <h1 id="naming-conventions">Naming Conventions</h1>
    <p>The naming conventions of Python’s library are a bit of a mess, so we’ll never get this completely consistent –
        nevertheless, here are the currently recommended naming standards. New modules and packages (including third
        party frameworks) should be written to these standards, but where an existing library has a different style,
        internal consistency is preferred.</p>
    <h2 id="overriding-principle">Overriding Principle</h2>
    <p>Names that are visible to the user as public parts of the API should follow conventions that reflect usage rather
        than implementation.</p>
    <h2 id="descriptive-naming-styles">Descriptive: Naming Styles</h2>
    <p>There are a lot of different naming styles. It helps to be able to recognize what naming style is being used,
        independently from what they are used for.</p>
    <p>The following naming styles are commonly distinguished:</p>
    <ul>
        <li><code>b</code> (single lowercase letter)</li>
        <li><code>B</code> (single uppercase letter)</li>
        <li><code>lowercase</code></li>
        <li><code>lower_case_with_underscores</code></li>
        <li><code>UPPERCASE</code></li>
        <li><code>UPPER_CASE_WITH_UNDERSCORES</code></li>
        <li>
            <p><code>CapitalizedWords</code> (or CapWords, or CamelCase – so named because of the bumpy look of its
                letters <a href="#fn4" class="footnoteRef" id="fnref4"><sup>4</sup></a>). This is also sometimes known
                as StudlyCaps.</p>
            Note: When using abbreviations in CapWords, capitalize all the letters of the abbreviation. Thus
            HTTPServerError is better than HttpServerError.
        </li>
        <li><code>mixedCase</code> (differs from CapitalizedWords by initial lowercase character!)</li>
        <li><code>Capitalized_Words_With_Underscores</code> (ugly!)</li>
    </ul>
    <p>There’s also the style of using a short unique prefix to group related names together. This is not used much in
        Python, but it is mentioned for completeness. For example, the <code>os.stat()</code> function returns a tuple
        whose items traditionally have names like <code>st_mode</code>, <code>st_size</code>, <code>st_mtime</code> and
        so on. (This is done to emphasize the correspondence with the fields of the POSIX system call struct, which
        helps programmers familiar with that.)</p>
    <p>The X11 library uses a leading X for all its public functions. In Python, this style is generally deemed
        unnecessary because attribute and method names are prefixed with an object, and function names are prefixed with
        a module name.</p>
    <p>In addition, the following special forms using leading or trailing underscores are recognized (these can
        generally be combined with any case convention):</p>
    <ul>
        <li><code>_single_leading_underscore</code>: weak “internal use” indicator. E.g. <code>from M import *</code>
            does not import objects whose name starts with an underscore.</li>
        <li>
            <p><code>single_trailing_underscore_</code>: used by convention to avoid conflicts with Python keyword, e.g.
                :</p>
            <pre><code>Tkinter.Toplevel(master, class_=&#39;ClassName&#39;)</code></pre>
        </li>
        <li><code>__double_leading_underscore</code>: when naming a class attribute, invokes name mangling (inside class
            FooBar, <code>__boo</code> becomes <code>_FooBar__boo</code>; see below).</li>
        <li><code>__double_leading_and_trailing_underscore__</code>: “magic” objects or attributes that live in
            user-controlled namespaces. E.g. <code>__init__</code>, <code>__import__</code> or <code>__file__</code>.
            Never invent such names; only use them as documented.</li>
    </ul>
    <h2 id="prescriptive-naming-conventions">Prescriptive: Naming Conventions</h2>
    <h3 id="names-to-avoid">Names to Avoid</h3>
    <p>Never use the characters ‘l’ (lowercase letter el), ‘O’ (uppercase letter oh), or ‘I’ (uppercase letter eye) as
        single character variable names.</p>
    <p>In some fonts, these characters are indistinguishable from the numerals one and zero. When tempted to use ‘l’,
        use ‘L’ instead.</p>
    <h3 id="package-and-module-names">Package and Module Names</h3>
    <p>Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves
        readability. Python packages should also have short, all-lowercase names, although the use of underscores is
        discouraged.</p>
    <p>When an extension module written in C or C++ has an accompanying Python module that provides a higher level (e.g.
        more object oriented) interface, the C/C++ module has a leading underscore (e.g. <code>_socket</code>).</p>
    <h3 id="class-names">Class Names</h3>
    <p>Class names should normally use the CapWords convention.</p>
    <p>The naming convention for functions may be used instead in cases where the interface is documented and used
        primarily as a callable.</p>
    <p>Note that there is a separate convention for builtin names: most builtin names are single words (or two words run
        together), with the CapWords convention used only for exception names and builtin constants.</p>
    <h3 id="exception-names">Exception Names</h3>
    <p>Because exceptions should be classes, the class naming convention applies here. However, you should use the
        suffix “Error” on your exception names (if the exception actually is an error).</p>
    <h3 id="global-variable-names">Global Variable Names</h3>
    <p>(Let’s hope that these variables are meant for use inside one module only.) The conventions are about the same as
        those for functions.</p>
    <p>Modules that are designed for use via <code>from M import *</code> should use the <code>__all__</code> mechanism
        to prevent exporting globals, or use the older convention of prefixing such globals with an underscore (which
        you might want to do to indicate these globals are “module non-public”).</p>
    <h3 id="function-names">Function Names</h3>
    <p>Function names should be lowercase, with words separated by underscores as necessary to improve readability.</p>
    <p>mixedCase is allowed only in contexts where that’s already the prevailing style (e.g. threading.py), to retain
        backwards compatibility.</p>
    <h3 id="function-and-method-arguments">Function and method arguments</h3>
    <p>Always use <code>self</code> for the first argument to instance methods.</p>
    <p>Always use <code>cls</code> for the first argument to class methods.</p>
    <p>If a function argument’s name clashes with a reserved keyword, it is generally better to append a single trailing
        underscore rather than use an abbreviation or spelling corruption. Thus <code>class_</code> is better than
        <code>clss</code>. (Perhaps better is to avoid such clashes by using a synonym.)</p>
    <h3 id="method-names-and-instance-variables">Method Names and Instance Variables</h3>
    <p>Use the function naming rules: lowercase with words separated by underscores as necessary to improve readability.
    </p>
    <p>Use one leading underscore only for non-public methods and instance variables.</p>
    <p>To avoid name clashes with subclasses, use two leading underscores to invoke Python’s name mangling rules.</p>
    <p>Python mangles these names with the class name: if class Foo has an attribute named <code>__a</code>, it cannot
        be accessed by <code>Foo.__a</code>. (An insistent user could still gain access by calling
        <code>Foo._Foo__a</code>.) Generally, double leading underscores should be used only to avoid name conflicts
        with attributes in classes designed to be subclassed.</p>
    <p>Note: there is some controversy about the use of __names (see below).</p>
    <h3 id="constants">Constants</h3>
    <p>Constants are usually defined on a module level and written in all capital letters with underscores separating
        words. Examples include <code>MAX_OVERFLOW</code> and <code>TOTAL</code>.</p>
    <h3 id="designing-for-inheritance">Designing for inheritance</h3>
    <p>Always decide whether a class’s methods and instance variables (collectively: “attributes”) should be public or
        non-public. If in doubt, choose non-public; it’s easier to make it public later than to make a public attribute
        non-public.</p>
    <p>Public attributes are those that you expect unrelated clients of your class to use, with your commitment to avoid
        backward incompatible changes. Non-public attributes are those that are not intended to be used by third
        parties; you make no guarantees that non-public attributes won’t change or even be removed.</p>
    <p>We don’t use the term “private” here, since no attribute is really private in Python (without a generally
        unnecessary amount of work).</p>
    <p>Another category of attributes are those that are part of the “subclass API” (often called “protected” in other
        languages). Some classes are designed to be inherited from, either to extend or modify aspects of the class’s
        behavior. When designing such a class, take care to make explicit decisions about which attributes are public,
        which are part of the subclass API, and which are truly only to be used by your base class.</p>
    <p>With this in mind, here are the Pythonic guidelines:</p>
    <ul>
        <li>Public attributes should have no leading underscores.</li>
        <li>
            <p>If your public attribute name collides with a reserved keyword, append a single trailing underscore to
                your attribute name. This is preferable to an abbreviation or corrupted spelling. (However,
                notwithstanding this rule, ‘cls’ is the preferred spelling for any variable or argument which is known
                to be a class, especially the first argument to a class method.)</p>
            <p>Note 1: See the argument name recommendation above for class methods.</p>
        </li>
        <li>
            <p>For simple public data attributes, it is best to expose just the attribute name, without complicated
                accessor/mutator methods. Keep in mind that Python provides an easy path to future enhancement, should
                you find that a simple data attribute needs to grow functional behavior. In that case, use properties to
                hide functional implementation behind simple data attribute access syntax.</p>
            <p>Note 1: Properties only work on new-style classes.</p>
            <p>Note 2: Try to keep the functional behavior side-effect free, although side-effects such as caching are
                generally fine.</p>
            <p>Note 3: Avoid using properties for computationally expensive operations; the attribute notation makes the
                caller believe that access is (relatively) cheap.</p>
        </li>
        <li>
            <p>If your class is intended to be subclassed, and you have attributes that you do not want subclasses to
                use, consider naming them with double leading underscores and no trailing underscores. This invokes
                Python’s name mangling algorithm, where the name of the class is mangled into the attribute name. This
                helps avoid attribute name collisions should subclasses inadvertently contain attributes with the same
                name.</p>
            <p>Note 1: Note that only the simple class name is used in the mangled name, so if a subclass chooses both
                the same class name and attribute name, you can still get name collisions.</p>
            <p>Note 2: Name mangling can make certain uses, such as debugging and <code>__getattr__()</code>, less
                convenient. However the name mangling algorithm is well documented and easy to perform manually.</p>
            <p>Note 3: Not everyone likes name mangling. Try to balance the need to avoid accidental name clashes with
                potential use by advanced callers.</p>
        </li>
    </ul>
    <h2 id="public-and-internal-interfaces">Public and internal interfaces</h2>
    <p>Any backwards compatibility guarantees apply only to public interfaces. Accordingly, it is important that users
        be able to clearly distinguish between public and internal interfaces.</p>
    <p>Documented interfaces are considered public, unless the documentation explicitly declares them to be provisional
        or internal interfaces exempt from the usual backwards compatibility guarantees. All undocumented interfaces
        should be assumed to be internal.</p>
    <p>To better support introspection, modules should explicitly declare the names in their public API using the
        <code>__all__</code> attribute. Setting <code>__all__</code> to an empty list indicates that the module has no
        public API.</p>
    <p>Even with <code>__all__</code> set appropriately, internal interfaces (packages, modules, classes, functions,
        attributes or other names) should still be prefixed with a single leading underscore.</p>
    <p>An interface is also considered internal if any containing namespace (package, module or class) is considered
        internal.</p>
    <p>Imported names should always be considered an implementation detail. Other modules must not rely on indirect
        access to such imported names unless they are an explicitly documented part of the containing module’s API, such
        as <code>os.path</code> or a package’s <code>__init__</code> module that exposes functionality from submodules.
    </p>
    <h1 id="programming-recommendations">Programming Recommendations</h1>
    <ul>
        <li>
            <p>Code should be written in a way that does not disadvantage other implementations of Python (PyPy, Jython,
                IronPython, Cython, Psyco, and such).</p>
            <p>For example, do not rely on CPython’s efficient implementation of in-place string concatenation for
                statements in the form <code>a += b</code> or <code>a = a + b</code>. This optimization is fragile even
                in CPython (it only works for some types) and isn’t present at all in implementations that don’t use
                refcounting. In performance sensitive parts of the library, the <code>''.join()</code> form should be
                used instead. This will ensure that concatenation occurs in linear time across various implementations.
            </p>
        </li>
        <li>
            <p>Comparisons to singletons like None should always be done with <code>is</code> or <code>is not</code>,
                never the equality operators.</p>
            <p>Also, beware of writing <code>if x</code> when you really mean <code>if x is not None</code> – e.g. when
                testing whether a variable or argument that defaults to None was set to some other value. The other
                value might have a type (such as a container) that could be false in a boolean context!</p>
        </li>
        <li>
            <p>Use <code>is not</code> operator rather than <code>not ... is</code>. While both expressions are
                functionally identical, the former is more readable and preferred.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>if foo is not None:</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>if not foo is None:</code></pre>
        </li>
        <li>
            <p>When implementing ordering operations with rich comparisons, it is best to implement all six operations
                (<code>__eq__</code>, <code>__ne__</code>, <code>__lt__</code>, <code>__le__</code>,
                <code>__gt__</code>, <code>__ge__</code>) rather than relying on other code to only exercise a
                particular comparison.</p>
            <p>To minimize the effort involved, the <code>functools.total_ordering()</code> decorator provides a tool to
                generate missing comparison methods.</p>
            <p>PEP 207 indicates that reflexivity rules <em>are</em> assumed by Python. Thus, the interpreter may swap
                <code>y &gt; x</code> with <code>x &lt; y</code>, <code>y &gt;= x</code> with <code>x &lt;= y</code>,
                and may swap the arguments of <code>x == y</code> and <code>x != y</code>. The <code>sort()</code> and
                <code>min()</code> operations are guaranteed to use the <code>&lt;</code> operator and the
                <code>max()</code> function uses the <code>&gt;</code> operator. However, it is best to implement all
                six operations so that confusion doesn’t arise in other contexts.</p>
        </li>
        <li>
            <p>Always use a def statement instead of an assignment statement that binds a lambda expression directly to
                an identifier.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>def f(x): return 2*x</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>f = lambda x: 2*x</code></pre>
            <p>The first form means that the name of the resulting function object is specifically ‘f’ instead of the
                generic ‘&lt;lambda&gt;’. This is more useful for tracebacks and string representations in general. The
                use of the assignment statement eliminates the sole benefit a lambda expression can offer over an
                explicit def statement (i.e. that it can be embedded inside a larger expression)</p>
        </li>
        <li>
            <p>Derive exceptions from <code>Exception</code> rather than <code>BaseException</code>. Direct inheritance
                from <code>BaseException</code> is reserved for exceptions where catching them is almost always the
                wrong thing to do.</p>
            <p>Design exception hierarchies based on the distinctions that code <em>catching</em> the exceptions is
                likely to need, rather than the locations where the exceptions are raised. Aim to answer the question
                “What went wrong?” programmatically, rather than only stating that “A problem occurred” (see PEP 3151
                for an example of this lesson being learned for the builtin exception hierarchy)</p>
            <p>Class naming conventions apply here, although you should add the suffix “Error” to your exception classes
                if the exception is an error. Non-error exceptions that are used for non-local flow control or other
                forms of signaling need no special suffix.</p>
        </li>
        <li>
            <p>Use exception chaining appropriately. In Python 3, “raise X from Y” should be used to indicate explicit
                replacement without losing the original traceback.</p>
            <p>When deliberately replacing an inner exception (using “raise X” in Python 2 or “raise X from None” in
                Python 3.3+), ensure that relevant details are transferred to the new exception (such as preserving the
                attribute name when converting KeyError to AttributeError, or embedding the text of the original
                exception in the new exception message).</p>
        </li>
        <li>
            <p>When raising an exception in Python 2, use <code>raise ValueError('message')</code> instead of the older
                form <code>raise ValueError, 'message'</code>.</p>
            <p>The latter form is not legal Python 3 syntax.</p>
            <p>The paren-using form also means that when the exception arguments are long or include string formatting,
                you don’t need to use line continuation characters thanks to the containing parentheses.</p>
        </li>
        <li>
            <p>When catching exceptions, mention specific exceptions whenever possible instead of using a bare
                <code>except:</code> clause.</p>
            <p>For example, use:</p>
            <pre><code>try:
                import platform_specific_module
            except ImportError:
                platform_specific_module = None</code></pre>
            <p>A bare <code>except:</code> clause will catch SystemExit and KeyboardInterrupt exceptions, making it
                harder to interrupt a program with Control-C, and can disguise other problems. If you want to catch all
                exceptions that signal program errors, use <code>except Exception:</code> (bare except is equivalent to
                <code>except BaseException:</code>).</p>
            <p>A good rule of thumb is to limit use of bare ‘except’ clauses to two cases:</p>
            <ol style="list-style-type: decimal">
                <li>If the exception handler will be printing out or logging the traceback; at least the user will be
                    aware that an error has occurred.</li>
                <li>If the code needs to do some cleanup work, but then lets the exception propagate upwards with
                    <code>raise</code>. <code>try...finally</code> can be a better way to handle this case.</li>
            </ol>
        </li>
        <li>
            <p>When binding caught exceptions to a name, prefer the explicit name binding syntax added in Python 2.6:
            </p>
            <pre><code>try:
                process_data()
            except Exception as exc:
                raise DataProcessingFailedError(str(exc))</code></pre>
            <p>This is the only syntax supported in Python 3, and avoids the ambiguity problems associated with the
                older comma-based syntax.</p>
        </li>
        <li>When catching operating system errors, prefer the explicit exception hierarchy introduced in Python 3.3 over
            introspection of <code>errno</code> values.</li>
        <li>
            <p>Additionally, for all try/except clauses, limit the <code>try</code> clause to the absolute minimum
                amount of code necessary. Again, this avoids masking bugs.</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>try:
                value = collection[key]
            except KeyError:
                return key_not_found(key)
            else:
                return handle_value(value)</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>try:
                # Too broad!
                return handle_value(collection[key])
            except KeyError:
                # Will also catch KeyError raised by handle_value()
                return key_not_found(key)</code></pre>
        </li>
        <li>When a resource is local to a particular section of code, use a <code>with</code> statement to ensure it is
            cleaned up promptly and reliably after use. A try/finally statement is also acceptable.</li>
        <li>
            <p>Context managers should be invoked through separate functions or methods whenever they do something other
                than acquire and release resources. For example:</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>
with conn.begin_transaction():
    do_stuff_in_transaction(conn)</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
with conn:
    do_stuff_in_transaction(conn)</code></pre>
            <p>The latter example doesn’t provide any information to indicate that the __enter__ and __exit__ methods
                are doing something other than closing the connection after a transaction. Being explicit is important
                in this case.</p>
        </li>
        <li>
            <p>Be consistent in return statements. Either all return statements in a function should return an
                expression, or none of them should. If any return statement returns an expression, any return statements
                where no value is returned should explicitly state this as <code>return None</code>, and an explicit
                return statement should be present at the end of the function (if reachable).</p>
            <p class="yes"><span>Yes:</span></p>
            <pre><code>
def foo(x):
    if x &gt;= 0:
        return math.sqrt(x)
    else:
        return None

def bar(x):
    if x &lt; 0:
        return None
    return math.sqrt(x)</code></pre>
            <p class="no"><span>No:</span></p>
            <pre><code>
def foo(x):
    if x &gt;= 0:
        return math.sqrt(x)

def bar(x):
    if x &lt; 0:
        return
    return math.sqrt(x)</code></pre>
        </li>
        <li>
            <p>Use string methods instead of the string module.</p>
            <p>String methods are always much faster and share the same API with unicode strings. Override this rule if
                backward compatibility with Pythons older than 2.0 is required.</p>
        </li>
        <li>
            <p>Use <code>''.startswith()</code> and <code>''.endswith()</code> instead of string slicing to check for
                prefixes or suffixes.</p>
            <p>startswith() and endswith() are cleaner and less error prone. For example:</p>
            <pre><code>
Yes: 
if foo.startswith(&#39;bar&#39;):
No:  
if foo[:3] == &#39;bar&#39;:</code></pre>
        </li>
        <li>
            <p>Object type comparisons should always use isinstance() instead of comparing types directly. :</p>
            <pre><code>
Yes: 
if isinstance(obj, int):

No:  
if type(obj) is type(1):</code></pre>
            <p>When checking if an object is a string, keep in mind that it might be a unicode string too! In Python 2,
                str and unicode have a common base class, basestring, so you can do:</p>
            <pre><code>if isinstance(obj, basestring):</code></pre>
            <p>Note that in Python 3, <code>unicode</code> and <code>basestring</code> no longer exist (there is only
                <code>str</code>) and a bytes object is no longer a kind of string (it is a sequence of integers
                instead)</p>
        </li>
        <li>
            <p>For sequences, (strings, lists, tuples), use the fact that empty sequences are false. :</p>
            <pre><code>
Yes: 
if not seq:
if seq:

No: 
if len(seq)
if not len(seq)</code></pre>
        </li>
        <li>Don’t write string literals that rely on significant trailing whitespace. Such trailing whitespace is
            visually indistinguishable and some editors (or more recently, reindent.py) will trim them.</li>
        <li>
            <p>Don’t compare boolean values to True or False using <code>==</code>. :</p>
            <pre><code>
Yes:   
if greeting:
No:    
if greeting == True:
Worse: 
if greeting is True:</code></pre>
        </li>
    </ul>
    <h2 id="function-annotations">Function Annotations</h2>
    <p>With the acceptance of PEP 484, the style rules for function annotations are changing.</p>
    <ul>
        <li>In order to be forward compatible, function annotations in Python 3 code should preferably use PEP 484
            syntax. (There are some formatting recommendations for annotations in the previous section.)</li>
        <li>The experimentation with annotation styles that was recommended previously in this PEP is no longer
            encouraged.</li>
        <li>However, outside the stdlib, experiments within the rules of PEP 484 are now encouraged. For example,
            marking up a large third party library or application with PEP 484 style type annotations, reviewing how
            easy it was to add those annotations, and observing whether their presence increases code understandabilty.
        </li>
        <li>The Python standard library should be conservative in adopting such annotations, but their use is allowed
            for new code and for big refactorings.</li>
        <li>
            <p>For code that wants to make a different use of function annotations it is recommended to put a comment of
                the form:</p>
            <pre><code># type: ignore</code></pre>
            <p>near the top of the file; this tells type checker to ignore all annotations. (More fine-grained ways of
                disabling complaints from type checkers can be found in PEP 484.)</p>
        </li>
        <li>Like linters, type checkers are optional, separate tools. Python interpreters by default should not issue
            any messages due to type checking and should not alter their behavior based on annotations.</li>
        <li>Users who don’t want to use type checkers are free to ignore them. However, it is expected that users of
            third party library packages may want to run type checkers over those packages. For this purpose PEP 484
            recommends the use of stub files: .pyi files that are read by the type checker in preference of the
            corresponding .py files. Stub files can be distributed with a library, or separately (with the library
            author’s permission) through the typeshed repo <a href="#fn5" class="footnoteRef"
                id="fnref5"><sup>5</sup></a>.</li>
        <li>
            <p>For code that needs to be backwards compatible, function annotations can be added in the form of
                comments. Basically, this Python 3 annotation:</p>
            <pre><code>
def embezzle(self, account: str, funds: int = 1000000, **fake_receipts: str) -&gt; None:
    &quot;&quot;&quot;Embezzle funds from account using fake receipts.&quot;&quot;&quot;
    &lt;code goes here&gt;</code></pre>
            <p>is equivalent to the following:</p>
            <pre><code>
def embezzle(self, account, funds=1000000, **fake_receipts):
    # type: (str, int, **str) -&gt; None
    &quot;&quot;&quot;Embezzle funds from account using fake receipts.&quot;&quot;&quot;
    &lt;code goes here&gt;</code></pre>
            <p>The mypy type checker <a href="#fn6" class="footnoteRef" id="fnref6"><sup>6</sup></a> currently supports
                this syntax, and other type checkers are encouraged to adopt it.</p>
        </li>
    </ul>
    <h1 id="copyright">Copyright</h1>
    <p>This document has been placed in the public domain.</p>
    <h1><strong>Footnotes</strong></h1>
    <div class="footnotes">
        <hr />
        <ol>
            <li id="fn1">
                <p>PEP 7, Style Guide for C Code, van Rossum<a href="#fnref1">↩</a></p>
            </li>
            <li id="fn2">
                <p>Barry’s GNU Mailman style guide <a href="http://barry.warsaw.us/software/STYLEGUIDE.txt"
                        class="uri">http://barry.warsaw.us/software/STYLEGUIDE.txt</a><a href="#fnref2">↩</a></p>
            </li>
            <li id="fn3">
                <p><em>Hanging indentation</em> is a type-setting style where all the lines in a paragraph are indented
                    except the first line. In the context of Python, the term is used to describe a style where the
                    opening parenthesis of a parenthesized statement is the last non-whitespace character of the line,
                    with subsequent lines being indented until the closing parenthesis.<a href="#fnref3">↩</a></p>
            </li>
            <li id="fn4">
                <p><a href="http://www.wikipedia.com/wiki/CamelCase"
                        class="uri">http://www.wikipedia.com/wiki/CamelCase</a><a href="#fnref4">↩</a></p>
            </li>
            <li id="fn5">
                <p>Typeshed repo <a href="https://github.com/python/typeshed"
                        class="uri">https://github.com/python/typeshed</a><a href="#fnref5">↩</a></p>
            </li>
            <li id="fn6">
                <p>mypy type checker <a href="http://mypy-lang.org" class="uri">http://mypy-lang.org</a> <a
                        href="https://github.com/JukkaL/mypy" class="uri">https://github.com/JukkaL/mypy</a><a
                        href="#fnref6">↩</a></p>
            </li>
        </ol>
</body>

</html>
`
}
//# sourceMappingURL=extension.js.map