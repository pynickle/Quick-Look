function getjscontent() {
    return `
    <html lang="en"><head>
    <meta charset="utf-8">
    <title>Google JavaScript Style Guide</title>
    <style>
        *{
            margin:10px 10px 10px 10px
        }
    </style>
    </head>
    <body>
    <div id="content">
    <h1>Google JavaScript Style Guide</h1><div id="tocDiv" class="vertical_toc"><div class="toc_title"></div><h3 class="ignoreLink" id="toc">Table of Contents</h3><table class="columns"><tbody valign="top" class="toc"><tr><td class="two_columns"><dl><dt><a href="#introduction">1 Introduction</a></dt><dd><a href="#terminology-notes">1.1 Terminology notes</a></dd><dd><a href="#guide-notes">1.2 Guide notes</a></dd></dl><dl><dt><a href="#source-file-basics">2 Source file basics</a></dt><dd><a href="#file-name">2.1 File name</a></dd><dd><a href="#file-encoding">2.2 File encoding: UTF-8</a></dd><dd><a href="#special-characters">2.3 Special characters</a></dd></dl><dl><dt><a href="#source-file-structure">3 Source file structure</a></dt><dd><a href="#file-copyright">3.1 License or copyright information, if present</a></dd><dd><a href="#file-fileoverview">3.2 @fileoverview JSDoc, if present</a></dd><dd><a href="#file-goog-module">3.3 goog.module statement</a></dd><dd><a href="#file-goog-require">3.4 goog.require statements</a></dd><dd><a href="#file-implementation">3.5 The file’s implementation</a></dd></dl><dl><dt><a href="#formatting">4 Formatting</a></dt><dd><a href="#formatting-braces">4.1 Braces</a></dd><dd><a href="#formatting-block-indentation">4.2 Block indentation: +2 spaces</a></dd><dd><a href="#formatting-statements">4.3 Statements</a></dd><dd><a href="#formatting-column-limit">4.4 Column limit: 80</a></dd><dd><a href="#formatting-line-wrapping">4.5 Line-wrapping</a></dd><dd><a href="#formatting-whitespace">4.6 Whitespace</a></dd><dd><a href="#formatting-grouping-parentheses">4.7 Grouping parentheses: recommended</a></dd><dd><a href="#formatting-comments">4.8 Comments</a></dd></dl><dl><dt><a href="#language-features">5 Language features</a></dt><dd><a href="#features-local-variable-declarations">5.1 Local variable declarations</a></dd><dd><a href="#features-array-literals">5.2 Array literals</a></dd><dd><a href="#features-object-literals">5.3 Object literals</a></dd><dd><a href="#features-classes">5.4 Classes</a></dd><dd><a href="#features-functions">5.5 Functions</a></dd><dd><a href="#features-string-literals">5.6 String literals</a></dd><dd><a href="#features-number-literals">5.7 Number literals</a></dd><dd><a href="#features-control-structures">5.8 Control structures</a></dd><dd><a href="#features-this">5.9 this</a></dd><dd><a href="#disallowed-features">5.10 Disallowed features</a></dd></dl><dl><dt><a href="#naming">6 Naming</a></dt><dd><a href="#naming-rules-common-to-all-identifiers">6.1 Rules common to all identifiers</a></dd><dd><a href="#naming-rules-by-identifier-type">6.2 Rules by identifier type</a></dd><dd><a href="#naming-camel-case-defined">6.3 Camel case: defined</a></dd></dl><dl><dt><a href="#jsdoc">7 JSDoc</a></dt><dd><a href="#jsdoc-general-form">7.1 General form</a></dd><dd><a href="#jsdoc-markdown">7.2 Markdown</a></dd><dd><a href="#jsdoc-tags">7.3 JSDoc tags</a></dd><dd><a href="#jsdoc-line-wrapping">7.4 Line wrapping</a></dd><dd><a href="#jsdoc-top-file-level-comments">7.5 Top/file-level comments</a></dd><dd><a href="#jsdoc-class-comments">7.6 Class comments</a></dd><dd><a href="#jsdoc-enum-and-typedef-comments">7.7 Enum and typedef comments</a></dd><dd><a href="#jsdoc-method-and-function-comments">7.8 Method and function comments</a></dd><dd><a href="#jsdoc-property-comments">7.9 Property comments</a></dd><dd><a href="#jsdoc-type-annotations">7.10 Type annotations</a></dd><dd><a href="#jsdoc-visibility-annotations">7.11 Visibility annotations</a></dd></dl><dl><dt><a href="#policies">8 Policies</a></dt><dd><a href="#policies-be-consistent">8.1 Issues unspecified by Google Style: Be Consistent!</a></dd><dd><a href="#policies-compiler-warnings">8.2 Compiler warnings</a></dd><dd><a href="#policies-deprecation">8.3 Deprecation</a></dd><dd><a href="#policies-code-not-in-google-style">8.4 Code not in Google Style</a></dd><dd><a href="#policies-local-style-rules">8.5 Local style rules</a></dd><dd><a href="#policies-generated-code-mostly-exempt">8.6 Generated code: mostly exempt</a></dd></dl><dl><dt><a href="#appendices">9 Appendices</a></dt><dd><a href="#appendices-jsdoc-tag-reference">9.1 JSDoc tag reference</a></dd><dd><a href="#appendices-commonly-misunderstood-style-rules">9.2 Commonly misunderstood style rules</a></dd><dd><a href="#appendices-style-related-tools">9.3 Style-related tools</a></dd><dd><a href="#appendices-legacy-exceptions">9.4 Exceptions for legacy platforms</a></dd></dl></td></tr></tbody></table></div>
    <h2 id="introduction" style="left: -46px; position: relative;">1 Introduction<a href="#introduction" alt="link to introduction"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <p>This document serves as the <strong>complete</strong> definition of Google’s coding standards
    for source code in the JavaScript programming language. A JavaScript source file
    is described as being <em>in Google Style</em> if and only if it adheres to the rules
    herein.</p>
    
    <p>Like other programming style guides, the issues covered span not only aesthetic
    issues of formatting, but other types of conventions or coding standards as
    well. However, this document focuses primarily on the hard-and-fast rules that
    we follow universally, and avoids giving advice that isn't clearly enforceable
    (whether by human or tool). </p>
    
    <h3 id="terminology-notes" style="left: -46px; position: relative;">1.1 Terminology notes<a href="#terminology-notes" alt="link to terminology-notes"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>In this document, unless otherwise clarified:</p>
    
    <ol>
    <li><p>The term <em>comment</em> always refers to <em>implementation</em> comments. We do not use
    the phrase <q>documentation comments</q>, instead using the common term “JSDoc”
    for both human-readable text and machine-readable annotations within
    <code>/** … */</code>.</p></li>
    <li><p>This Style Guide uses <a href="http://tools.ietf.org/html/rfc2119">RFC 2119</a> terminology when using the phrases <em>must</em>,
    <em>must not</em>, <em>should</em>, <em>should not</em>, and <em>may</em>.  The terms <em>prefer</em> and
    <em>avoid</em> correspond to <em>should</em> and <em>should not</em>, respectively.  Imperative
    and declarative statements are prescriptive and correspond to <em>must</em>.</p></li>
    </ol>
    
    <p>Other <q>terminology notes</q> will appear occasionally throughout the document.</p>
    
    <h3 id="guide-notes" style="left: -46px; position: relative;">1.2 Guide notes<a href="#guide-notes" alt="link to guide-notes"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Example code in this document is <strong>non-normative</strong>. That is, while the examples
    are in Google Style, they may not illustrate the <em>only</em> stylish way to represent
    the code. Optional formatting choices made in examples must not be enforced as
    rules.</p>
    
    <h2 id="source-file-basics" style="left: -46px; position: relative;">2 Source file basics<a href="#source-file-basics" alt="link to source-file-basics"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <h3 id="file-name" style="left: -46px; position: relative;">2.1 File name<a href="#file-name" alt="link to file-name"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>File names must be all lowercase and may include underscores (<code>_</code>) or dashes
    (<code>-</code>), but no additional punctuation. Follow the convention that your project
    uses. Filenames’ extension must be <code>.js</code>.</p>
    
    <h3 id="file-encoding" style="left: -46px; position: relative;">2.2 File encoding: UTF-8<a href="#file-encoding" alt="link to file-encoding"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Source files are encoded in <strong>UTF-8</strong>.</p>
    
    <h3 id="special-characters" style="left: -46px; position: relative;">2.3 Special characters<a href="#special-characters" alt="link to special-characters"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="whitespace-characters" style="left: -46px; position: relative;">2.3.1 Whitespace characters<a href="#whitespace-characters" alt="link to whitespace-characters"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Aside from the line terminator sequence, the ASCII horizontal space character
    (0x20) is the only whitespace character that appears anywhere in a source
    file. This implies that</p>
    
    <ol>
    <li><p>All other whitespace characters in string literals are escaped, and</p></li>
    <li><p>Tab characters are <strong>not</strong> used for indentation.</p></li>
    </ol>
    
    <h4 id="special-escape-sequences" style="left: -46px; position: relative;">2.3.2 Special escape sequences<a href="#special-escape-sequences" alt="link to special-escape-sequences"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>For any character that has a special escape sequence (<code>\\'</code>, <code>\\"</code>, <code>\\</code>, <code>\\b</code>,
    <code>\\f</code>, <code>\\n</code>, <code>\\r</code>, <code>\\t</code>, <code>\\v</code>), that sequence is used rather than the
    corresponding numeric escape (e.g <code>\\x0a</code>, <code>\\u000a</code>, or <code>\\u{a}</code>). Legacy octal
    escapes are never used.</p>
    
    <h4 id="non-ascii-characters" style="left: -46px; position: relative;">2.3.3 Non-ASCII characters<a href="#non-ascii-characters" alt="link to non-ascii-characters"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>For the remaining non-ASCII characters, either the actual Unicode character
    (e.g. <code>∞</code>) or the equivalent hex or Unicode escape (e.g. <code>\\u221e</code>) is used,
    depending only on which makes the code <strong>easier to read and understand</strong>.</p>
    
    <p class="tip">Tip: In the Unicode escape case, and occasionally even when actual Unicode
    characters are used, an explanatory comment can be very helpful.</p>
    
    <table>
      <thead>
        <tr>
          <th>Example
          </th><th>Discussion
      </th></tr></thead><tbody>
        <tr>
          <td><code class="prettyprint lang-js">const units = 'μs';</code>
          </td><td>Best: perfectly clear even without a comment.
        </td></tr><tr>
          <td>
            <code class="prettyprint lang-js">const units = '\\u03bcs'; // 'μs'
            </code>
          </td><td>Allowed, but there’s no reason to do this.
        </td></tr><tr>
          <td>
            <code class="prettyprint lang-js">const units = '\\u03bcs'; // Greek letter mu, 's'
            </code>
          </td><td>Allowed, but awkward and prone to mistakes.
        </td></tr><tr>
          <td><code class="badcode">const units = '\\u03bcs';</code>
          </td><td>Poor: the reader has no idea what this is.
        </td></tr><tr>
          <td>
            <code class="prettyprint lang-js">return '\\ufeff' + content;  // byte order mark
            </code>
          </td><td>
            Good: use escapes for non-printable characters, and comment if
            necessary.
    </td></tr></tbody></table>
    
    <p class="tip">Tip: Never make your code less readable simply out of fear that some programs
    might not handle non-ASCII characters properly. If that happens, those programs
    are <strong>broken</strong> and they must be <strong>fixed</strong>.</p>
    
    <h2 id="source-file-structure" style="left: -46px; position: relative;">3 Source file structure<a href="#source-file-structure" alt="link to source-file-structure"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <p>A source file consists of, <strong>in order</strong>:</p>
    
    <ol>
    <li>License or copyright information, if present</li>
    <li><code>@fileoverview</code> JSDoc, if present</li>
    <li><code>goog.module</code> statement</li>
    <li><code>goog.require</code> statements</li>
    <li>The file’s implementation</li>
    </ol>
    
    <p><strong>Exactly one blank line</strong> separates each section that is present, except the
    file's implementation, which may be preceded by 1 or 2 blank lines.</p>
    
    <h3 id="file-copyright" style="left: -46px; position: relative;">3.1 License or copyright information, if present<a href="#file-copyright" alt="link to file-copyright"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>If license or copyright information belongs in a file, it belongs here.</p>
    
    <h3 id="file-fileoverview" style="left: -46px; position: relative;">3.2 <code>@fileoverview</code> JSDoc, if present<a href="#file-fileoverview" alt="link to file-fileoverview"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>See <a href="#jsdoc-top-file-level-comments">7.5 Top/file-level comments</a> for formatting rules.</p>
    
    <h3 id="file-goog-module" style="left: -46px; position: relative;">3.3 <code>goog.module</code> statement<a href="#file-goog-module" alt="link to file-goog-module"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>All files must declare exactly one <code>goog.module</code> name on a single line: lines
    containing a <code>goog.module</code> declaration must not be wrapped, and are therefore an
    exception to the 80-column limit.</p>
    
    <p>The entire argument to goog.module is what defines a namespace.  It is the
    package name (an identifier that reflects the fragment of the directory
    structure where the code lives) plus, optionally, the main class/enum/interface
    that it defines concatenated to the end.</p>
    
    <p>Example</p>
    
    <pre class="language-js prettyprint">goog.module('search.urlHistory.UrlHistoryService');
    </pre>
    
    <h4 id="naming-hierarchy" style="left: -46px; position: relative;">3.3.1 Hierarchy<a href="#naming-hierarchy" alt="link to naming-hierarchy"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Module namespaces may never be named as a <em>direct</em> child of another module's
    namespace.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">goog.module('foo.bar');   // 'foo.bar.qux' would be fine, though
    goog.module('foo.bar.baz');
    </pre>
    
    <p>The directory hierarchy reflects the namespace hierarchy, so that deeper-nested
    children are subdirectories of higher-level parent directories.  Note that this
    implies that owners of “parent” namespace groups are necessarily aware of all
    child namespaces, since they exist in the same directory.</p>
    
    <h4 id="file-set-test-only" style="left: -46px; position: relative;">3.3.2 <code>goog.setTestOnly</code><a href="#file-set-test-only" alt="link to file-set-test-only"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The single <code>goog.module</code> statement may optionally be followed by a call to
    goog.setTestOnly().</p>
    
    <h4 id="file-declare-legacy-namespace" style="left: -46px; position: relative;">3.3.3 <code>goog.module.declareLegacyNamespace</code><a href="#file-declare-legacy-namespace" alt="link to file-declare-legacy-namespace"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The single <code>goog.module</code> statement may optionally be followed by a call to
    <code>goog.module.declareLegacyNamespace();</code>. Avoid
    <code>goog.module.declareLegacyNamespace()</code> when possible.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">goog.module('my.test.helpers');
    goog.module.declareLegacyNamespace();
    goog.setTestOnly();
    </pre>
    
    <p><code>goog.module.declareLegacyNamespace</code> exists to ease the transition from
    traditional object hierarchy-based namespaces but comes with some naming
    restrictions. As the child module name must be created after the parent
    namespace, this name <strong>must not</strong> be a child or parent of any other
    <code>goog.module</code> (for example, <code>goog.module('parent');</code> and
    <code>goog.module('parent.child');</code> cannot both exist safely, nor can
    <code>goog.module('parent');</code> and <code>goog.module('parent.child.grandchild');</code>).</p>
    
    <h4 id="file-es6-modules" style="left: -46px; position: relative;">3.3.4 ES6 Modules<a href="#file-es6-modules" alt="link to file-es6-modules"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not use ES6 modules yet (i.e. the <code>export</code> and <code>import</code> keywords), as their
    semantics are not yet finalized. Note that this policy will be revisited once
    the semantics are fully-standard.</p>
    
    <h3 id="file-goog-require" style="left: -46px; position: relative;">3.4 <code>goog.require</code> statements<a href="#file-goog-require" alt="link to file-goog-require"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Imports are done with <code>goog.require</code> statements, grouped together immediately
    following the module declaration. Each <code>goog.require</code> is assigned to a single
    constant alias, or else destructured into several constant aliases. These
    aliases are the only acceptable way to refer to the <code>require</code>d dependency,
    whether in code or in type annotations: the fully qualified name is never used
    except as the argument to <code>goog.require</code>. Alias names should match the final
    dot-separated component of the imported module name when possible, though
    additional components may be included (with appropriate casing such that the
    alias' casing still correctly identifies its type) if necessary to
    disambiguate, or if it significantly improves readability. <code>goog.require</code>
    statements may not appear anywhere else in the file.</p>
    
    <p>If a module is imported only for its side effects, the assignment may be
    omitted, but the fully qualified name may not appear anywhere else in the file.
    A comment is required to explain why this is needed and suppress a compiler
    warning.</p>
    
    
    
    <p>The lines are sorted according to the following rules: All requires with a name
    on the left hand side come first, sorted alphabetically by those names. Then
    destructuring requires, again sorted by the names on the left hand side.
    Finally, any <code>goog.require</code> calls that are standalone (generally these are for
    modules imported just for their side effects).</p>
    
    <p class="tip">Tip: There’s no need to memorize this order and enforce it manually. You can
    rely on your IDE to report requires
    that are not sorted correctly.</p>
    
    <p>If a long alias or module name would cause a line to exceed the 80-column limit,
    it <strong>must not</strong> be wrapped: goog.require lines are an exception to the 80-column
    limit.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">const MyClass = goog.require('some.package.MyClass');
    const NsMyClass = goog.require('other.ns.MyClass');
    const googAsserts = goog.require('goog.asserts');
    const testingAsserts = goog.require('goog.testing.asserts');
    const than80columns = goog.require('pretend.this.is.longer.than80columns');
    const {clear, forEach, map} = goog.require('goog.array');
    /** @suppress {extraRequire} Initializes MyFramework. */
    goog.require('my.framework.initialization');
    </pre>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js badcode prettyprint">const randomName = goog.require('something.else'); // name must match
    
    const {clear, forEach, map} = // don't break lines
        goog.require('goog.array');
    
    function someFunction() {
      const alias = goog.require('my.long.name.alias'); // must be at top level
      // …
    }
    </pre>
    
    <h4 id="file-goog-forward-declare" style="left: -46px; position: relative;">3.4.1 <code>goog.forwardDeclare</code><a href="#file-goog-forward-declare" alt="link to file-goog-forward-declare"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p><code>goog.forwardDeclare</code> is not needed very often, but is a valuable tool to break
    circular dependencies or to reference late loaded code. These statements are
    grouped together and immediately follow any <code>goog.require</code> statements. A
    <code>goog.forwardDeclare</code> statement must follow the same style rules as a
    <code>goog.require</code> statement.</p>
    
    <h3 id="file-implementation" style="left: -46px; position: relative;">3.5 The file’s implementation<a href="#file-implementation" alt="link to file-implementation"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>The actual implementation follows after all dependency information is declared
    (separated by at least one blank line).</p>
    
    <p>This may consist of any module-local declarations (constants, variables,
    classes, functions, etc), as well as any exported symbols.
    </p>
    
    <h2 id="formatting" style="left: -46px; position: relative;">4 Formatting<a href="#formatting" alt="link to formatting"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <p><strong>Terminology Note</strong>: <em>block-like construct</em> refers to the body of a class,
    function, method, or brace-delimited block of code.  Note that, by
    <a href="#features-array-literals">5.2 Array literals</a> and <a href="#features-object-literals">5.3 Object literals</a>, any array or
    object literal may optionally be treated as if it were a block-like construct.</p>
    
    <p class="tip">Tip: Use <code>clang-format</code>. The JavaScript community has invested effort to make
    sure clang-format <q>does the right thing</q> on JavaScript files. <code>clang-format</code> has
    integration with several popular
    editors.</p>
    
    <h3 id="formatting-braces" style="left: -46px; position: relative;">4.1 Braces<a href="#formatting-braces" alt="link to formatting-braces"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="formatting-braces-all" style="left: -46px; position: relative;">4.1.1 Braces are used for all control structures<a href="#formatting-braces-all" alt="link to formatting-braces-all"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Braces are required for all control structures (i.e. <code>if</code>, <code>else</code>, <code>for</code>, <code>do</code>,
    <code>while</code>, as well as any others), even if the body contains only a single
    statement.  The first statement of a non-empty block must begin on its own line.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js badcode prettyprint">if (someVeryLongCondition())
      doSomething();
    
    for (let i = 0; i &lt; foo.length; i++) bar(foo[i]);
    </pre>
    
    <p class="exception"><strong>Exception</strong>: A simple if statement that can fit entirely on a single line with
    no wrapping (and that doesn’t have an else) may be kept on a single line with no
    braces when it improves readability.  This is the only case in which a control
    structure may omit braces and newlines.</p>
    
    <pre class="language-js prettyprint">if (shortCondition()) return;
    </pre>
    
    <h4 id="formatting-nonempty-blocks" style="left: -46px; position: relative;">4.1.2 Nonempty blocks: K&amp;R style<a href="#formatting-nonempty-blocks" alt="link to formatting-nonempty-blocks"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Braces follow the Kernighan and Ritchie style (<q><a href="http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html">Egyptian brackets</a></q>) for
    <em>nonempty</em> blocks and block-like constructs:</p>
    
    <ul>
    <li>No line break before the opening brace.</li>
    <li>Line break after the opening brace.</li>
    <li>Line break before the closing brace.</li>
    <li>Line break after the closing brace <em>if</em> that brace terminates a statement or
    the body of a function or class statement, or a class method. Specifically,
    there is <em>no</em> line break after the brace if it is followed by <code>else</code>, <code>catch</code>,
    <code>while</code>, or a comma, semicolon, or right-parenthesis.</li>
    </ul>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">class InnerClass {
      constructor() {}
    
      /** @param {number} foo */
      method(foo) {
        if (condition(foo)) {
          try {
            // Note: this might fail.
            something();
          } catch (err) {
            recover();
          }
        }
      }
    }
    </pre>
    
    <h4 id="formatting-empty-blocks" style="left: -46px; position: relative;">4.1.3 Empty blocks: may be concise<a href="#formatting-empty-blocks" alt="link to formatting-empty-blocks"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>An empty block or block-like construct <em>may</em> be closed immediately after it is
    opened, with no characters, space, or line break in between (i.e. <code>{}</code>),
    <strong>unless</strong> it is a part of a <em>multi-block statement</em> (one that directly contains
    multiple blocks: <code>if</code>/<code>else</code> or <code>try</code>/<code>catch</code>/<code>finally</code>).</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">function doNothing() {}
    </pre>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">if (condition) {
      // …
    } else if (otherCondition) {} else {
      // …
    }
    
    try {
      // …
    } catch (e) {}
    </pre>
    
    <h3 id="formatting-block-indentation" style="left: -46px; position: relative;">4.2 Block indentation: +2 spaces<a href="#formatting-block-indentation" alt="link to formatting-block-indentation"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Each time a new block or block-like construct is opened, the indent increases by
    two spaces. When the block ends, the indent returns to the previous indent
    level. The indent level applies to both code and comments throughout the
    block. (See the example in <a href="#formatting-nonempty-blocks">4.1.2 Nonempty blocks: K&amp;R style</a>).</p>
    
    <h4 id="formatting-array-literals" style="left: -46px; position: relative;">4.2.1 Array literals: optionally <q>block-like</q><a href="#formatting-array-literals" alt="link to formatting-array-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Any array literal may optionally be formatted as if it were a “block-like
    construct.” For example, the following are all valid (<strong>not</strong> an exhaustive
    list):</p>
    
    <pre class="language-js prettyprint columns">const a = [
      0,
      1,
      2,
    ];
    
    const b =
        [0, 1, 2];
    
    </pre>
    
    <pre class="language-js prettyprint columns">const c = [0, 1, 2];
    
    someMethod(foo, [
      0, 1, 2,
    ], bar);
    </pre>
    
    <p>Other combinations are allowed, particularly when emphasizing semantic groupings
    between elements, but should not be used only to reduce the vertical size of
    larger arrays.</p>
    
    <h4 id="formatting-object-literals" style="left: -46px; position: relative;">4.2.2 Object literals: optionally <q>block-like</q><a href="#formatting-object-literals" alt="link to formatting-object-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Any object literal may optionally be formatted as if it were a “block-like
    construct.” The same examples apply as <a href="#formatting-array-literals">4.2.1 Array literals: optionally block-like</a>. For
    example, the following are all valid (<strong>not</strong> an exhaustive list):</p>
    
    <pre class="language-js prettyprint columns">const a = {
      a: 0,
      b: 1,
    };
    
    const b =
        {a: 0, b: 1};
    </pre>
    
    <pre class="language-js prettyprint columns">const c = {a: 0, b: 1};
    
    someMethod(foo, {
      a: 0, b: 1,
    }, bar);
    </pre>
    
    <h4 id="formatting-class-literals" style="left: -46px; position: relative;">4.2.3 Class literals<a href="#formatting-class-literals" alt="link to formatting-class-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Class literals (whether declarations or expressions) are indented as blocks. Do
    not add semicolons after methods, or after the closing brace of a class
    <em>declaration</em> (statements—such as assignments—that contain class <em>expressions</em>
    are still terminated with a semicolon). Use the <code>extends</code> keyword, but not the
    <code>@extends</code> JSDoc annotation unless the class extends a templatized type.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint columns">class Foo {
      constructor() {
        /** @type {number} */
        this.x = 42;
      }
    
      /** @return {number} */
      method() {
        return this.x;
      }
    }
    Foo.Empty = class {};
    </pre>
    
    <pre class="language-js prettyprint columns">/** @extends {Foo&lt;string&gt;} */
    foo.Bar = class extends Foo {
      /** @override */
      method() {
        return super.method() / 2;
      }
    };
    
    /** @interface */
    class Frobnicator {
      /** @param {string} message */
      frobnicate(message) {}
    }
    </pre>
    
    <h4 id="formatting-function-expressions" style="left: -46px; position: relative;">4.2.4 Function expressions<a href="#formatting-function-expressions" alt="link to formatting-function-expressions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>When declaring an anonymous function in the list of arguments for a function
    call, the body of the function is indented two spaces more than the preceding
    indentation depth.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">prefix.something.reallyLongFunctionName('whatever', (a1, a2) =&gt; {
      // Indent the function body +2 relative to indentation depth
      // of the 'prefix' statement one line above.
      if (a1.equals(a2)) {
        someOtherLongFunctionName(a1);
      } else {
        andNowForSomethingCompletelyDifferent(a2.parrot);
      }
    });
    
    some.reallyLongFunctionCall(arg1, arg2, arg3)
        .thatsWrapped()
        .then((result) =&gt; {
          // Indent the function body +2 relative to the indentation depth
          // of the '.then()' call.
          if (result) {
            result.use();
          }
        });
    </pre>
    
    <h4 id="formatting-switch-statements" style="left: -46px; position: relative;">4.2.5 Switch statements<a href="#formatting-switch-statements" alt="link to formatting-switch-statements"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>As with any other block, the contents of a switch block are indented +2.</p>
    
    
    
    <p>After a switch label, a newline appears, and the indentation level is increased
    +2, exactly as if a block were being opened. An explicit block may be used if
    required by lexical scoping. The following switch label returns to the previous
    indentation level, as if a block had been closed.</p>
    
    <p>A blank line is optional between a <code>break</code> and the following case.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">switch (animal) {
      case Animal.BANDERSNATCH:
        handleBandersnatch();
        break;
    
      case Animal.JABBERWOCK:
        handleJabberwock();
        break;
    
      default:
        throw new Error('Unknown animal');
    }
    </pre>
    
    <h3 id="formatting-statements" style="left: -46px; position: relative;">4.3 Statements<a href="#formatting-statements" alt="link to formatting-statements"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="formatting-one-statement-perline" style="left: -46px; position: relative;">4.3.1 One statement per line<a href="#formatting-one-statement-perline" alt="link to formatting-one-statement-perline"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Each statement is followed by a line-break.</p>
    
    <h4 id="formatting-semicolons-are-required" style="left: -46px; position: relative;">4.3.2 Semicolons are required<a href="#formatting-semicolons-are-required" alt="link to formatting-semicolons-are-required"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Every statement must be terminated with a semicolon. Relying on automatic
    semicolon insertion is forbidden.</p>
    
    <h3 id="formatting-column-limit" style="left: -46px; position: relative;">4.4 Column limit: 80<a href="#formatting-column-limit" alt="link to formatting-column-limit"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>JavaScript code has a column limit of 80 characters. Except as noted below, any
    line that would exceed this limit must be line-wrapped, as explained in
    <a href="#formatting-line-wrapping">4.5 Line-wrapping</a>.</p>
    
    <p class="exceptions"><strong>Exceptions:</strong></p>
    
    <ol>
    <li>Lines where obeying the column limit is not possible (for example, a long URL
    in JSDoc or a shell command intended to be copied-and-pasted).</li>
    <li><code>goog.module</code> and <code>goog.require</code> statements (see <a href="#file-goog-module">3.3 goog.module statement</a> and
    <a href="#file-goog-require">3.4 goog.require statements</a>).</li>
    </ol>
    
    <h3 id="formatting-line-wrapping" style="left: -46px; position: relative;">4.5 Line-wrapping<a href="#formatting-line-wrapping" alt="link to formatting-line-wrapping"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p><strong>Terminology Note</strong>: <em>Line-wrapping</em> is defined as breaking a single expression
    into multiple lines.</p>
    
    <p>There is no comprehensive, deterministic formula showing <em>exactly</em> how to
    line-wrap in every situation. Very often there are several valid ways to
    line-wrap the same piece of code.</p>
    
    <p class="note">Note: While the typical reason for line-wrapping is to avoid overflowing the
    column limit, even code that would in fact fit within the column limit may be
    line-wrapped at the author's discretion.</p>
    
    <p class="tip">Tip: Extracting a method or local variable may solve the problem without the
    need to line-wrap.</p>
    
    <h4 id="formatting-where-to-break" style="left: -46px; position: relative;">4.5.1 Where to break<a href="#formatting-where-to-break" alt="link to formatting-where-to-break"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The prime directive of line-wrapping is: prefer to break at a <strong>higher syntactic
    level</strong>. </p>
    
    <p class="preferred">Preferred:</p>
    
    <pre class="language-js prettyprint">currentEstimate =
        calc(currentEstimate + x * currentEstimate) /
            2.0f;
    </pre>
    
    <p class="discouraged">Discouraged:</p>
    
    <pre class="language-js prettyprint badcode">currentEstimate = calc(currentEstimate + x *
        currentEstimate) / 2.0f;
    </pre>
    
    <p>In the preceding example, the syntactic levels from highest to lowest are as
    follows: assignment, division, function call, parameters, number constant.</p>
    
    <p>Operators are wrapped as follows:</p>
    
    <ol>
    <li>When a line is broken at an operator the break comes after the symbol. (Note
    that this is not the same practice used in Google style for Java.)
    <ol>
    <li>This does not apply to the <q>dot</q> (<code>.</code>), which is not actually an
    operator.</li>
    </ol></li>
    <li>A method or constructor name stays attached to the open parenthesis (<code>(</code>)
    that follows it.</li>
    <li>A comma (<code>,</code>) stays attached to the token that precedes it.</li>
    </ol>
    
    <blockquote>
    <p class="note">Note: The primary goal for line wrapping is to have clear code, not
    necessarily code that fits in the smallest number of lines.</p>
    </blockquote>
    
    <h4 id="formatting-indent" style="left: -46px; position: relative;">4.5.2 Indent continuation lines at least +4 spaces<a href="#formatting-indent" alt="link to formatting-indent"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>When line-wrapping, each line after the first (each <em>continuation line</em>) is
    indented at least +4 from the original line, unless it falls under the rules of
    block indentation.</p>
    
    <p>When there are multiple continuation lines, indentation may be varied beyond +4
    as appropriate.  In general, continuation lines at a deeper syntactic level are
    indented by larger multiples of 4, and two lines use the same indentation level
    if and only if they begin with syntactically parallel elements.</p>
    
    <p><a href="#formatting-horizontal-alignment">4.6.3 Horizontal alignment: discouraged</a> addresses the discouraged practice of
    using a variable number of spaces to align certain tokens with previous lines.</p>
    
    <h3 id="formatting-whitespace" style="left: -46px; position: relative;">4.6 Whitespace<a href="#formatting-whitespace" alt="link to formatting-whitespace"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="formatting-vertical-whitespace" style="left: -46px; position: relative;">4.6.1 Vertical whitespace<a href="#formatting-vertical-whitespace" alt="link to formatting-vertical-whitespace"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>A single blank line appears:</p>
    
    <ol>
    <li>Between consecutive methods in a class or object literal
    <ol>
    <li>Exception: A blank line between two consecutive properties definitions in
    an object literal (with no other code between them) is optional. Such
    blank lines are used as needed to create <em>logical groupings</em> of fields.</li>
    </ol></li>
    <li>Within method bodies, sparingly to create <em>logical groupings</em> of statements.
    Blank lines at the start or end of a function body are not allowed.</li>
    <li><em>Optionally</em> before the first or after the last method in a class or object
    literal (neither encouraged nor discouraged).</li>
    <li>As required by other sections of this document (e.g.
    <a href="#file-goog-require">3.4 goog.require statements</a>).</li>
    </ol>
    
    <p><em>Multiple</em> consecutive blank lines are permitted, but never required (nor
    encouraged).</p>
    
    <h4 id="formatting-horizontal-whitespace" style="left: -46px; position: relative;">4.6.2 Horizontal whitespace<a href="#formatting-horizontal-whitespace" alt="link to formatting-horizontal-whitespace"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Use of horizontal whitespace depends on location, and falls into three broad
    categories: <em>leading</em> (at the start of a line), <em>trailing</em> (at the end of a
    line), and <em>internal</em>.  Leading whitespace (i.e., indentation) is addressed
    elsewhere.  Trailing whitespace is forbidden.</p>
    
    <p>Beyond where required by the language or other style rules, and apart from
    literals, comments, and JSDoc, a single internal ASCII space also appears in the
    following places <strong>only</strong>.</p>
    
    <ol>
    <li>Separating any reserved word (such as <code>if</code>, <code>for</code>, or <code>catch</code>) from an open
    parenthesis (<code>(</code>) that follows it on that line.</li>
    <li>Separating any reserved word (such as <code>else</code> or <code>catch</code>) from a closing
    curly brace (<code>}</code>) that precedes it on that line.</li>
    <li>Before any open curly brace (<code>{</code>), with two exceptions:
    <ol>
    <li>Before an object literal that is the first argument of a function or the
    first element in an array literal (e.g. <code>foo({a: [{c: d}]})</code>).</li>
    <li>In a template expansion, as it is forbidden by the language
    (e.g. <code>abc${1 + 2}def</code>).</li>
    </ol></li>
    <li>On both sides of any binary or ternary operator.</li>
    <li>After a comma (<code>,</code>) or semicolon (<code>;</code>). Note that spaces are <em>never</em> allowed
    before these characters.</li>
    <li>After the colon (<code>:</code>) in an object literal.</li>
    <li>On both sides of the double slash (<code>//</code>) that begins an end-of-line
    comment. Here, multiple spaces are allowed, but not required.</li>
    <li>After an open-JSDoc comment character and on both sides of close characters
    (e.g. for short-form type declarations or casts: <code>this.foo = /** @type
    {number} */ (bar);</code> or <code>function(/** string */ foo) {</code>).</li>
    </ol>
    
    <h4 id="formatting-horizontal-alignment" style="left: -46px; position: relative;">4.6.3 Horizontal alignment: discouraged<a href="#formatting-horizontal-alignment" alt="link to formatting-horizontal-alignment"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p><strong>Terminology Note</strong>: <em>Horizontal alignment</em> is the practice of adding a
    variable number of additional spaces in your code with the goal of making
    certain tokens appear directly below certain other tokens on previous lines.</p>
    
    <p>This practice is permitted, but it is <strong>generally discouraged</strong> by Google
    Style. It is not even required to <em>maintain</em> horizontal alignment in places
    where it was already used.</p>
    
    <p>Here is an example without alignment, followed by one with alignment.  Both are
    allowed, but the latter is discouraged:</p>
    
    <pre class="language-js prettyprint">{
      tiny: 42, // this is great
      longer: 435, // this too
    };
    
    {
      tiny:   42,  // permitted, but future edits
      longer: 435, // may leave it unaligned
    };
    </pre>
    
    <p class="tip">Tip: Alignment can aid readability, but it creates problems for future
    maintenance. Consider a future change that needs to touch just one line. This
    change may leave the formerly-pleasing formatting mangled, and that is
    allowed. More often it prompts the coder (perhaps you) to adjust whitespace on
    nearby lines as well, possibly triggering a cascading series of
    reformattings. That one-line change now has a <q>blast radius.</q> This can at worst
    result in pointless busywork, but at best it still corrupts version history
    information, slows down reviewers and exacerbates merge conflicts.</p>
    
    <h4 id="formatting-function-arguments" style="left: -46px; position: relative;">4.6.4 Function arguments<a href="#formatting-function-arguments" alt="link to formatting-function-arguments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Prefer to put all function arguments on the same line as the function name. If doing so would exceed the 80-column limit, the arguments must be line-wrapped in a readable way. To save space, you may wrap as close to 80 as possible, or put each argument on its own line to enhance readability. Indentation should be four spaces. Aligning to the parenthesis is allowed, but discouraged. Below are the most common patterns for argument wrapping:</p>
    
    <pre class="language-js prettyprint">// Arguments start on a new line, indented four spaces. Preferred when the
    // arguments don't fit on the same line with the function name (or the keyword
    // "function") but fit entirely on the second line. Works with very long
    // function names, survives renaming without reindenting, low on space.
    doSomething(
        descriptiveArgumentOne, descriptiveArgumentTwo, descriptiveArgumentThree) {
      // …
    }
    
    // If the argument list is longer, wrap at 80. Uses less vertical space,
    // but violates the rectangle rule and is thus not recommended.
    doSomething(veryDescriptiveArgumentNumberOne, veryDescriptiveArgumentTwo,
        tableModelEventHandlerProxy, artichokeDescriptorAdapterIterator) {
      // …
    }
    
    // Four-space, one argument per line.  Works with long function names,
    // survives renaming, and emphasizes each argument.
    doSomething(
        veryDescriptiveArgumentNumberOne,
        veryDescriptiveArgumentTwo,
        tableModelEventHandlerProxy,
        artichokeDescriptorAdapterIterator) {
      // …
    }
    </pre>
    
    <h3 id="formatting-grouping-parentheses" style="left: -46px; position: relative;">4.7 Grouping parentheses: recommended<a href="#formatting-grouping-parentheses" alt="link to formatting-grouping-parentheses"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Optional grouping parentheses are omitted only when the author and reviewer
    agree that there is no reasonable chance that the code will be misinterpreted
    without them, nor would they have made the code easier to read. It is <em>not</em>
    reasonable to assume that every reader has the entire operator precedence table
    memorized.</p>
    
    <p>Do not use unnecessary parentheses around the entire expression following
    <code>delete</code>, <code>typeof</code>, <code>void</code>, <code>return</code>, <code>throw</code>, <code>case</code>, <code>in</code>, <code>of</code>, or <code>yield</code>.</p>
    
    <p>Parentheses are required for type casts: <code>/** @type {!Foo} */ (foo)</code>.</p>
    
    <h3 id="formatting-comments" style="left: -46px; position: relative;">4.8 Comments<a href="#formatting-comments" alt="link to formatting-comments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>This section addresses <em>implementation comments</em>. JSDoc is addressed separately
    in <a href="#jsdoc">7 JSDoc</a>.</p>
    
    <h4 id="formatting-block-comment-style" style="left: -46px; position: relative;">4.8.1 Block comment style<a href="#formatting-block-comment-style" alt="link to formatting-block-comment-style"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Block comments are indented at the same level as the surrounding code. They may
    be in <code>/* … */</code> or <code>//</code>-style. For multi-line <code>/* … */</code> comments, subsequent
    lines must start with * aligned with the <code>*</code> on the previous line, to make
    comments obvious with no extra context.  “Parameter name” comments should appear
    after values whenever the value and method name do not sufficiently convey the
    meaning.</p>
    
    <pre class="language-js prettyprint">/*
     * This is
     * okay.
     */
    
    // And so
    // is this.
    
    /* This is fine, too. */
    
    someFunction(obviousParam, true /* shouldRender */, 'hello' /* name */);
    </pre>
    
    <p>Comments are not enclosed in boxes drawn with asterisks or other characters.</p>
    
    <p>Do not use JSDoc (<code>/** … */</code>) for any of the above implementation comments.</p>
    
    <h2 id="language-features" style="left: -46px; position: relative;">5 Language features<a href="#language-features" alt="link to language-features"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <p>JavaScript includes many dubious (and even dangerous) features.  This section
    delineates which features may or may not be used, and any additional constraints
    on their use.</p>
    
    <h3 id="features-local-variable-declarations" style="left: -46px; position: relative;">5.1 Local variable declarations<a href="#features-local-variable-declarations" alt="link to features-local-variable-declarations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-use-const-and-let" style="left: -46px; position: relative;">5.1.1 Use <code>const</code> and <code>let</code><a href="#features-use-const-and-let" alt="link to features-use-const-and-let"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Declare all local variables with either <code>const</code> or <code>let</code>. Use const by default,
    unless a variable needs to be reassigned. The <code class="badcode">var</code>
    keyword must not be used.</p>
    
    <h4 id="features-one-variable-per-declaration" style="left: -46px; position: relative;">5.1.2 One variable per declaration<a href="#features-one-variable-per-declaration" alt="link to features-one-variable-per-declaration"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Every local variable declaration declares only one variable: declarations such
    as <code class="badcode">let a = 1, b = 2;</code> are not used.</p>
    
    <h4 id="features-declared-when-needed" style="left: -46px; position: relative;">5.1.3 Declared when needed, initialized as soon as possible<a href="#features-declared-when-needed" alt="link to features-declared-when-needed"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Local variables are <strong>not</strong> habitually declared at the start of their containing
    block or block-like construct. Instead, local variables are declared close to
    the point they are first used (within reason), to minimize their scope.</p>
    
    <h4 id="features-declare-types-as-needed" style="left: -46px; position: relative;">5.1.4 Declare types as needed<a href="#features-declare-types-as-needed" alt="link to features-declare-types-as-needed"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>JSDoc type annotations may be added either on the line above the declaration, or
    else inline before the variable name.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">const /** !Array&lt;number&gt; */ data = [];
    
    /** @type {!Array&lt;number&gt;} */
    const data = [];
    </pre>
    
    <p class="tip">Tip: There are many cases where the compiler can infer a templatized type but
    not its parameters.  This is particularly the case when the initializing literal
    or constructor call does not include any values of the template parameter type
    (e.g., empty arrays, objects, <code>Map</code>s, or <code>Set</code>s), or if the variable is modified
    in a closure.  Local variable type annotations are particularly helpful in these
    cases since otherwise the compiler will infer the template parameter as unknown.</p>
    
    <h3 id="features-array-literals" style="left: -46px; position: relative;">5.2 Array literals<a href="#features-array-literals" alt="link to features-array-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-arrays-trailing-comma" style="left: -46px; position: relative;">5.2.1 Use trailing commas<a href="#features-arrays-trailing-comma" alt="link to features-arrays-trailing-comma"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    
    
    <p>Include a trailing comma whenever there is a line break between the final
    element and the closing bracket.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">const values = [
      'first value',
      'second value',
    ];
    </pre>
    
    <h4 id="features-arrays-ctor" style="left: -46px; position: relative;">5.2.2 Do not use the variadic <code>Array</code> constructor<a href="#features-arrays-ctor" alt="link to features-arrays-ctor"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The constructor is error-prone if arguments are added or removed. Use a literal
    instead.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">const a1 = new Array(x1, x2, x3);
    const a2 = new Array(x1, x2);
    const a3 = new Array(x1);
    const a4 = new Array();
    </pre>
    
    <p>This works as expected except for the third case: if <code>x1</code> is a whole number then
    <code>a3</code> is an array of size <code>x1</code> where all elements are <code>undefined</code>. If <code>x1</code> is any
    other number, then an exception will be thrown, and if it is anything else then
    it will be a single-element array.</p>
    
    <p>Instead, write</p>
    
    <pre class="language-js prettyprint">const a1 = [x1, x2, x3];
    const a2 = [x1, x2];
    const a3 = [x1];
    const a4 = [];
    </pre>
    
    <p>Explicitly allocating an array of a given length using <code>new Array(length)</code> is
    allowed when appropriate.</p>
    
    <h4 id="features-arrays-non-numeric-properties" style="left: -46px; position: relative;">5.2.3 Non-numeric properties<a href="#features-arrays-non-numeric-properties" alt="link to features-arrays-non-numeric-properties"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not define or use non-numeric properties on an array (other than
    <code>length</code>). Use a <code>Map</code> (or <code>Object</code>) instead.</p>
    
    <h4 id="features-arrays-destructuring" style="left: -46px; position: relative;">5.2.4 Destructuring<a href="#features-arrays-destructuring" alt="link to features-arrays-destructuring"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Array literals may be used on the left-hand side of an assignment to perform
    destructuring (such as when unpacking multiple values from a single array or
    iterable).  A final <q>rest</q> element may be included (with no space between the
    <code>...</code> and the variable name). Elements should be omitted if they are unused.</p>
    
    <pre class="language-js prettyprint">const [a, b, c, ...rest] = generateResults();
    let [, b,, d] = someArray;
    </pre>
    
    <p>Destructuring may also be used for function parameters (note that a parameter
    name is required but ignored). Always specify <code>[]</code> as the default value if a
    destructured array parameter is optional, and provide default values on the left
    hand side:</p>
    
    <pre class="language-js prettyprint">/** @param {!Array&lt;number&gt;=} param1 */
    function optionalDestructuring([a = 4, b = 2] = []) { … };
    </pre>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">function badDestructuring([a, b] = [4, 2]) { … };
    </pre>
    
    <p class="tip">Tip: For (un)packing multiple values into a function’s parameter or return,
    prefer object destructuring to array destructuring when possible, as it allows
    naming the individual elements and specifying a different type for each.*</p>
    
    <h4 id="features-arrays-spread-operator" style="left: -46px; position: relative;">5.2.5 Spread operator<a href="#features-arrays-spread-operator" alt="link to features-arrays-spread-operator"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Array literals may include the spread operator (<code>...</code>) to flatten elements out
    of one or more other iterables.  The spread operator should be used instead of
    more awkward constructs with <code>Array.prototype</code>.  There is no space after the
    <code>...</code>.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">[...foo]   // preferred over Array.prototype.slice.call(foo)
    [...foo, ...bar]   // preferred over foo.concat(bar)
    </pre>
    
    <h3 id="features-object-literals" style="left: -46px; position: relative;">5.3 Object literals<a href="#features-object-literals" alt="link to features-object-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-objects-use-trailing-comma" style="left: -46px; position: relative;">5.3.1 Use trailing commas<a href="#features-objects-use-trailing-comma" alt="link to features-objects-use-trailing-comma"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Include a trailing comma whenever there is a line break between the final
    property and the closing brace.</p>
    
    <h4 id="features-objects-ctor" style="left: -46px; position: relative;">5.3.2 Do not use the <code>Object</code> constructor<a href="#features-objects-ctor" alt="link to features-objects-ctor"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>While <code>Object</code> does not have the same problems as <code>Array</code>, it is still
    disallowed for consistency. Use an object literal (<code>{}</code> or <code>{a: 0, b: 1, c: 2}</code>)
    instead.</p>
    
    <h4 id="features-objects-mixing-keys" style="left: -46px; position: relative;">5.3.3 Do not mix quoted and unquoted keys<a href="#features-objects-mixing-keys" alt="link to features-objects-mixing-keys"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Object literals may represent either <em>structs</em> (with unquoted keys and/or
    symbols) or <em>dicts</em> (with quoted and/or computed keys). Do not mix these key
    types in a single object literal.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">{
      a: 42, // struct-style unquoted key
      'b': 43, // dict-style quoted key
    }
    </pre>
    
    <h4 id="features-objects-computed-property-names" style="left: -46px; position: relative;">5.3.4 Computed property names<a href="#features-objects-computed-property-names" alt="link to features-objects-computed-property-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Computed property names (e.g., <code>{['key' + foo()]: 42}</code>) are allowed, and are
    considered dict-style (quoted) keys (i.e., must not be mixed with non-quoted
    keys) unless the computed property is a symbol (e.g., <code>[Symbol.iterator]</code>).
    Enum values may also be used for computed keys, but should not be mixed with
    non-enum keys in the same literal.</p>
    
    <h4 id="features-objects-method-shorthand" style="left: -46px; position: relative;">5.3.5 Method shorthand<a href="#features-objects-method-shorthand" alt="link to features-objects-method-shorthand"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Methods can be defined on object literals using the method shorthand (<code>{method()
    {… }}</code>) in place of a colon immediately followed by a <code>function</code> or arrow
    function literal.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">return {
      stuff: 'candy',
      method() {
        return this.stuff;  // Returns 'candy'
      },
    };
    </pre>
    
    <p>Note that <code>this</code> in a method shorthand or <code>function</code> refers to the object
    literal itself whereas <code>this</code> in an arrow function refers to the scope outside
    the object literal.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">class {
      getObjectLiteral() {
        this.stuff = 'fruit';
        return {
          stuff: 'candy',
          method: () =&gt; this.stuff,  // Returns 'fruit'
        };
      }
    }
    </pre>
    
    <h4 id="features-objects-shorthand-properties" style="left: -46px; position: relative;">5.3.6 Shorthand properties<a href="#features-objects-shorthand-properties" alt="link to features-objects-shorthand-properties"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Shorthand properties are allowed on object literals.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">const foo = 1;
    const bar = 2;
    const obj = {
      foo,
      bar,
      method() { return this.foo + this.bar; },
    };
    assertEquals(3, obj.method());
    </pre>
    
    <h4 id="features-objects-destructuring" style="left: -46px; position: relative;">5.3.7 Destructuring<a href="#features-objects-destructuring" alt="link to features-objects-destructuring"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Object destructuring patterns may be used on the left-hand side of an assignment
    to perform destructuring and unpack multiple values from a single object.</p>
    
    <p>Destructured objects may also be used as function parameters, but should be kept
    as simple as possible: a single level of unquoted shorthand properties. Deeper
    levels of nesting and computed properties may not be used in parameter
    destructuring.  Specify any default values in the left-hand-side of the
    destructured parameter (<code>{str = 'some default'} = {}</code>, rather than <code class="badcode">{str} = {str: 'some default'}</code>), and if a destructured
    object is itself optional, it must default to <code>{}</code>.  The JSDoc for the
    destructured parameter may be given any name (the name is unused but is required
    by the compiler).</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">/**
     * @param {string} ordinary
     * @param {{num: (number|undefined), str: (string|undefined)}=} param1
     *     num: The number of times to do something.
     *     str: A string to do stuff to.
     */
    function destructured(ordinary, {num, str = 'some default'} = {})
    </pre>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">/** @param {{x: {num: (number|undefined), str: (string|undefined)}}} param1 */
    function nestedTooDeeply({x: {num, str}}) {};
    /** @param {{num: (number|undefined), str: (string|undefined)}=} param1 */
    function nonShorthandProperty({num: a, str: b} = {}) {};
    /** @param {{a: number, b: number}} param1 */
    function computedKey({a, b, [a + b]: c}) {};
    /** @param {{a: number, b: string}=} param1 */
    function nontrivialDefault({a, b} = {a: 2, b: 4}) {};
    </pre>
    
    <p>Destructuring may also be used for <code>goog.require</code> statements, and in this case
    must not be wrapped: the entire statement occupies one line, regardless of how
    long it is (see <a href="#file-goog-require">3.4 goog.require statements</a>).</p>
    
    <h4 id="features-objects-enums" style="left: -46px; position: relative;">5.3.8 Enums<a href="#features-objects-enums" alt="link to features-objects-enums"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Enumerations are defined by adding the <code>@enum</code> annotation to an object literal.
    Additional properties may not be added to an enum after it is defined.  Enums
    must be constant, and all enum values must be deeply immutable.</p>
    
    <pre class="language-js prettyprint">/**
     * Supported temperature scales.
     * @enum {string}
     */
    const TemperatureScale = {
      CELSIUS: 'celsius',
      FAHRENHEIT: 'fahrenheit',
    };
    
    /**
     * An enum with two options.
     * @enum {number}
     */
    const Option = {
      /** The option used shall have been the first. */
      FIRST_OPTION: 1,
      /** The second among two options. */
      SECOND_OPTION: 2,
    };
    </pre>
    
    <h3 id="features-classes" style="left: -46px; position: relative;">5.4 Classes<a href="#features-classes" alt="link to features-classes"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-classes-constructors" style="left: -46px; position: relative;">5.4.1 Constructors<a href="#features-classes-constructors" alt="link to features-classes-constructors"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Constructors are optional for concrete classes. Subclass constructors must call
    <code>super()</code> before setting any fields or otherwise accessing <code>this</code>.  Interfaces
    must not define a constructor.</p>
    
    <h4 id="features-classes-fields" style="left: -46px; position: relative;">5.4.2 Fields<a href="#features-classes-fields" alt="link to features-classes-fields"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Set all of a concrete object’s fields (i.e. all properties other than methods)
    in the constructor. Annotate fields that are never reassigned with <code>@const</code>
    (these need not be deeply immutable). Private fields must be annotated with
    <code>@private</code> and their names must end with a trailing underscore. Fields are never
    set on a concrete class' <code>prototype</code>.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">class Foo {
      constructor() {
        /** @private @const {!Bar} */
        this.bar_ = computeBar();
      }
    }
    </pre>
    
    <p class="tip">Tip: Properties should never be added to or removed from an instance after the
    constructor is finished, since it significantly hinders VMs’ ability to
    optimize.  If necessary, fields that are initialized later should be explicitly
    set to <code>undefined</code> in the constructor to prevent later shape changes. Adding
    <code>@struct</code> to an object will check that undeclared properties are not
    added/accessed.  Classes have this added by default.</p>
    
    <h4 id="features-classes-computed-properties" style="left: -46px; position: relative;">5.4.3 Computed properties<a href="#features-classes-computed-properties" alt="link to features-classes-computed-properties"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    
    
    <p>Computed properties may only be used in classes when the property is a
    symbol. Dict-style properties (that is, quoted or computed non-symbol keys, as
    defined in <a href="#features-objects-mixing-keys">5.3.3 Do not mix quoted and unquoted keys</a>) are not allowed.  A
    <code>[Symbol.iterator]</code> method should be defined for any classes that are logically
    iterable.  Beyond this, <code>Symbol</code> should be used sparingly.</p>
    
    <p class="tip">Tip: be careful of using any other built-in symbols (e.g., <code>Symbol.isConcatSpreadable</code>) as they are not polyfilled by the compiler and will therefore not work in older browsers.</p>
    
    <h4 id="features-classes-static-methods" style="left: -46px; position: relative;">5.4.4 Static methods<a href="#features-classes-static-methods" alt="link to features-classes-static-methods"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    
    
    <p>Where it does not interfere with readability, prefer module-local functions over
    private static methods.</p>
    
    <p>Static methods should only be called on the base class itself. Static methods
    should not be called on variables containing a dynamic instance that may be
    either the constructor or a subclass constructor (and must be defined with
    <code>@nocollapse</code> if this is done), and must not be called directly on a subclass
    that doesn’t define the method itself.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">class Base { /** @nocollapse */ static foo() {} }
    class Sub extends Base {}
    function callFoo(cls) { cls.foo(); }  // discouraged: don't call static methods dynamically
    Sub.foo();  // illegal: don't call static methods on subclasses that don't define it themselves
    </pre>
    
    <h4 id="features-classes-old-style" style="left: -46px; position: relative;">5.4.5 Old-style class declarations<a href="#features-classes-old-style" alt="link to features-classes-old-style"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>While ES6 classes are preferred, there are cases where ES6 classes may not be
    feasible.  For example:</p>
    
    <ol>
    <li><p>If there exist or will exist subclasses, including frameworks that create
    subclasses, that cannot be immediately changed to use ES6 class syntax. If
    such a class were to use ES6 syntax, all downstream subclasses not using ES6
    class syntax would need to be modified.</p></li>
    <li><p>Frameworks that require a known <code>this</code> value before calling the superclass
    constructor, since constructors with ES6 super classes do not have
    access to the instance <code>this</code> value until the call to <code>super</code> returns.</p></li>
    </ol>
    
    <p>In all other ways the style guide still applies to this code: <code>let</code>, <code>const</code>,
    default parameters, rest, and arrow functions should all be used when
    appropriate.</p>
    
    <p><code>goog.defineClass</code> allows for a class-like definition similar to ES6 class
    syntax:</p>
    
    <pre class="language-javascript">let C = goog.defineClass(S, {
      /**
       * @param {string} value
       */
      constructor(value) {
        S.call(this, 2);
        /** @const */
        this.prop = value;
      },
    
      /**
       * @param {string} param
       * @return {number}
       */
      method(param) {
        return 0;
      },
    });
    </pre>
    
    <p>Alternatively, while <code>goog.defineClass</code> should be preferred for all new code,
    more traditional syntax is also allowed.</p>
    
    <pre class="language-javascript">/**
      * @constructor @extends {S}
      * @param {string} value
      */
    function C(value) {
      S.call(this, 2);
      /** @const */
      this.prop = value;
    }
    goog.inherits(C, S);
    
    /**
     * @param {string} param
     * @return {number}
     */
    C.prototype.method = function(param) {
      return 0;
    };
    </pre>
    
    <p>Per-instance properties should be defined in the constructor after the call to the super class constructor, if there is a super class.  Methods should be defined on the prototype of the constructor.</p>
    
    <p>Defining constructor prototype hierarchies correctly is harder than it first appears!  For that reason, it is best to use <code>goog.inherits</code> from <a href="http://code.google.com/closure/library/">the Closure Library </a>.</p>
    
    <h4 id="features-classes-prototypes" style="left: -46px; position: relative;">5.4.6 Do not manipulate <code>prototype</code>s directly<a href="#features-classes-prototypes" alt="link to features-classes-prototypes"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The <code>class</code> keyword allows clearer and more readable class definitions than
    defining <code>prototype</code> properties. Ordinary implementation code has no business
    manipulating these objects, though they are still useful for defining <code>@record</code>
    interfaces and classes as defined in <a href="#features-classes-old-style">5.4.5 Old-style class declarations</a>. Mixins
    and modifying the prototypes of builtin objects are
    explicitly forbidden.</p>
    
    <p class="exception"><strong>Exception</strong>: Framework code (such as Polymer, or Angular) may need to use <code>prototype</code>s, and should not
    resort to even-worse workarounds to avoid doing so.</p>
    
    <p class="exception"><strong>Exception</strong>: Defining fields in interfaces (see <a href="#features-classes-interfaces">5.4.9 Interfaces</a>).</p>
    
    <h4 id="features-classes-getters-and-setters" style="left: -46px; position: relative;">5.4.7 Getters and Setters<a href="#features-classes-getters-and-setters" alt="link to features-classes-getters-and-setters"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get">JavaScript getter and setter properties</a>.  They are potentially
    surprising and difficult to reason about, and have limited support in the
    compiler.  Provide ordinary methods instead.</p>
    
    <p class="exception"><strong>Exception</strong>: when working with data binding frameworks (such as Angular and
    Polymer), getters and setters may be used sparingly.  Note, however, that
    compiler support is limited.  When they are used, they must be defined either
    with <code>get foo()</code> and <code>set foo(value)</code> in the class or object literal, or if that
    is not possible, with <code>Object.defineProperties</code>.  Do not use
    <code>Object.defineProperty</code>, which interferes with property renaming.  Getters
    <strong>must not</strong> change observable state.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">class Foo {
      get next() { return this.nextId++; }
    }
    </pre>
    
    <h4 id="features-classes-overriding-tostring" style="left: -46px; position: relative;">5.4.8 Overriding toString<a href="#features-classes-overriding-tostring" alt="link to features-classes-overriding-tostring"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The <code>toString</code> method may be overridden, but must always succeed and never have
    visible side effects.</p>
    
    <p class="tip">Tip: Beware, in particular, of calling other methods from toString, since
    exceptional conditions could lead to infinite loops.</p>
    
    <h4 id="features-classes-interfaces" style="left: -46px; position: relative;">5.4.9 Interfaces<a href="#features-classes-interfaces" alt="link to features-classes-interfaces"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Interfaces may be declared with <code>@interface</code> or <code>@record</code>. Interfaces declared
    with <code>@record</code> can be explicitly (i.e. via <code>@implements</code>) or implicitly
    implemented by a class or object literal.</p>
    
    <p>All non-static method bodies on an interface must be empty blocks.  Fields must
    be defined after the interface body as stubs on the <code>prototype</code>.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">/**
     * Something that can frobnicate.
     * @record
     */
    class Frobnicator {
      /**
       * Performs the frobnication according to the given strategy.
       * @param {!FrobnicationStrategy} strategy
       */
      frobnicate(strategy) {}
    }
    
    /** @type {number} The number of attempts before giving up. */
    Frobnicator.prototype.attempts;
    </pre>
    
    <h3 id="features-functions" style="left: -46px; position: relative;">5.5 Functions<a href="#features-functions" alt="link to features-functions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-functions-top-level-functions" style="left: -46px; position: relative;">5.5.1 Top-level functions<a href="#features-functions-top-level-functions" alt="link to features-functions-top-level-functions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Exported functions may be defined directly on the <code>exports</code> object, or else
    declared locally and exported separately.  Non-exported functions are encouraged
    and should not be declared <code>@private</code>.</p>
    
    <p class="examples">Examples:</p>
    
    <pre class="language-js prettyprint">/** @return {number} */
    function helperFunction() {
      return 42;
    }
    /** @return {number} */
    function exportedFunction() {
      return helperFunction() * 2;
    }
    /**
     * @param {string} arg
     * @return {number}
     */
    function anotherExportedFunction(arg) {
      return helperFunction() / arg.length;
    }
    /** @const */
    exports = {exportedFunction, anotherExportedFunction};
    </pre>
    
    <pre class="language-js prettyprint">/** @param {string} arg */
    exports.foo = (arg) =&gt; {
      // do some stuff ...
    };
    </pre>
    
    <h4 id="features-functions-nested-functions" style="left: -46px; position: relative;">5.5.2 Nested functions and closures<a href="#features-functions-nested-functions" alt="link to features-functions-nested-functions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Functions may contain nested function definitions.  If it is useful to give the
    function a name, it should be assigned to a local <code>const</code>.</p>
    
    <h4 id="features-functions-arrow-functions" style="left: -46px; position: relative;">5.5.3 Arrow functions<a href="#features-functions-arrow-functions" alt="link to features-functions-arrow-functions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Arrow functions provide a concise syntax and fix a number of difficulties with
    <code>this</code>.  Prefer arrow functions over the <code>function</code> keyword, particularly for
    nested functions (but see <a href="#features-objects-method-shorthand">5.3.5 Method shorthand</a>).</p>
    
    <p>Prefer using arrow functions over <code>f.bind(this)</code>, and especially over
    <code>goog.bind(f, this)</code>. Avoid writing <code>const self = this</code>. Arrow functions are
    particularly useful for callbacks, which sometimes pass unexpected additional
    arguments.</p>
    
    <p>The right-hand side of the arrow may be a single expression or a block.
    Parentheses around the arguments are optional if there is only a single
    non-destructured argument.</p>
    
    <p class="tip">Tip: It is a good practice to use parentheses even for single-argument arrows,
    since the code may still parse reasonably (but incorrectly) if the parentheses
    are forgotten when an additional argument is added.</p>
    
    <h4 id="features-functions-generators" style="left: -46px; position: relative;">5.5.4 Generators<a href="#features-functions-generators" alt="link to features-functions-generators"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Generators enable a number of useful abstractions and may be used as needed.</p>
    
    <p>When defining generator functions, attach the <code>*</code> to the <code>function</code> keyword when
    present, and separate it with a space from the name of the function.  When using
    delegating yields, attach the <code>*</code> to the <code>yield</code> keyword.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">/** @return {!Iterator&lt;number&gt;} */
    function* gen1() {
      yield 42;
    }
    
    /** @return {!Iterator&lt;number&gt;} */
    const gen2 = function*() {
      yield* gen1();
    }
    
    class SomeClass {
      /** @return {!Iterator&lt;number&gt;} */
      * gen() {
        yield 42;
      }
    }
    </pre>
    
    <h4 id="features-functions-parameters" style="left: -46px; position: relative;">5.5.5 Parameters<a href="#features-functions-parameters" alt="link to features-functions-parameters"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Function parameters must be typed with JSDoc annotations in the JSDoc preceding
    the function’s definition, except in the case of same-signature <code>@override</code>s,
    where all types are omitted.</p>
    
    <p>Parameter types <em>may</em> be specified inline, immediately before the parameter name
    (as in <code>(/** number */ foo, /** string */ bar) =&gt; foo + bar</code>). Inline and
    <code>@param</code> type annotations <em>must not</em> be mixed in the same function definition.</p>
    
    <h5 id="features-functions-default-parameters">5.5.5.1 Default parameters</h5>
    
    <p>Optional parameters are permitted using the equals operator in the parameter
    list. Optional parameters must include spaces on both sides of the equals
    operator, be named exactly like required parameters (i.e., not prefixed with
    <code>opt_</code>), use the <code>=</code> suffix in their JSDoc type, come after required parameters,
    and not use initializers that produce observable side effects. All optional
    parameters must have a default value in the function declaration, even if that
    value is <code>undefined</code>.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">/**
     * @param {string} required This parameter is always needed.
     * @param {string=} optional This parameter can be omitted.
     * @param {!Node=} node Another optional parameter.
     */
    function maybeDoSomething(required, optional = '', node = undefined) {}
    </pre>
    
    <p>Use default parameters sparingly. Prefer destructuring (as in
    <a href="#features-objects-destructuring">5.3.7 Destructuring</a>) to create readable APIs when there
    are more than a small handful of optional parameters that do not have a natural
    order.</p>
    
    <p class="note">Note: Unlike Python's default parameters, it is okay to use initializers that
    return new mutable objects (such as <code>{}</code> or <code>[]</code>) because the initializer is
    evaluated each time the default value is used, so a single object won't be
    shared across invocations.</p>
    
    <p class="tip">Tip: While arbitrary expressions including function calls may be used as
    initializers, these should be kept as simple as possible. Avoid initializers
    that expose shared mutable state, as that can easily introduce unintended
    coupling between function calls.</p>
    
    <h5 id="features-functions-rest-parameters">5.5.5.2 Rest parameters</h5>
    
    <p>Use a <em>rest</em> parameter instead of accessing <code>arguments</code>. Rest parameters are
    typed with a <code>...</code> prefix in their JSDoc. The rest parameter must be the last
    parameter in the list. There is no space between the <code>...</code> and the parameter
    name.  Do not name the rest parameter <code>var_args</code>. Never name a local variable or
    parameter <code>arguments</code>, which confusingly shadows the built-in name.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">/**
     * @param {!Array&lt;string&gt;} array This is an ordinary parameter.
     * @param {...number} numbers The remainder of arguments are all numbers.
     */
    function variadic(array, ...numbers) {}
    </pre>
    
    <h4 id="features-functions-returns" style="left: -46px; position: relative;">5.5.6 Returns<a href="#features-functions-returns" alt="link to features-functions-returns"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Function return types must be specified in the JSDoc directly above the function
    definition, except in the case of same-signature <code>@override</code>s where all types
    are omitted.</p>
    
    <h4 id="features-functions-generics" style="left: -46px; position: relative;">5.5.7 Generics<a href="#features-functions-generics" alt="link to features-functions-generics"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Declare generic functions and methods when necessary with <code>@template TYPE</code> in
    the JSDoc above the class definition.</p>
    
    <h4 id="features-functions-spread-operator" style="left: -46px; position: relative;">5.5.8 Spread operator<a href="#features-functions-spread-operator" alt="link to features-functions-spread-operator"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Function calls may use the spread operator (<code>...</code>).  Prefer the spread operator
    to <code>Function.prototype.apply</code> when an array or iterable is unpacked into
    multiple parameters of a variadic function.  There is no space after the <code>...</code>.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">function myFunction(...elements) {}
    myFunction(...array, ...iterable, ...generator());
    </pre>
    
    <h3 id="features-string-literals" style="left: -46px; position: relative;">5.6 String literals<a href="#features-string-literals" alt="link to features-string-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-strings-use-single-quotes" style="left: -46px; position: relative;">5.6.1 Use single quotes<a href="#features-strings-use-single-quotes" alt="link to features-strings-use-single-quotes"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Ordinary string literals are delimited with single quotes (<code>'</code>), rather than
    double quotes (<code>"</code>).</p>
    
    <p class="tip">Tip: if a string contains a single quote character, consider using a template
    string to avoid having to escape the quote.</p>
    
    <p>Ordinary string literals may not span multiple lines.</p>
    
    <h4 id="features-strings-template-strings" style="left: -46px; position: relative;">5.6.2 Template strings<a href="#features-strings-template-strings" alt="link to features-strings-template-strings"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Use template strings (delimited with <code>\`</code>) over complex string
    concatenation, particularly if multiple string literals are involved. Template
    strings may span multiple lines.</p>
    
    <p>If a template string spans multiple lines, it does not need to follow the
    indentation of the enclosing block, though it may if the added whitespace does
    not matter.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">function arithmetic(a, b) {
      return \`Here is a table of arithmetic operations:
    \${a} + \${b} = \${a + b}
    \${a} - \${b} = \${a - b}
    \${a} * \${b} = \${a * b}
    \${a} / \${b} = \${a / b}\`;
    }
    </pre>
    
    <h4 id="features-strings-no-line-continuations" style="left: -46px; position: relative;">5.6.3 No line continuations<a href="#features-strings-no-line-continuations" alt="link to features-strings-no-line-continuations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not use <em>line continuations</em> (that is, ending a line inside a string literal
    with a backslash) in either ordinary or template string literals. Even though
    ES5 allows this, it can lead to tricky errors if any trailing whitespace comes
    after the slash, and is less obvious to readers.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">const longString = 'This is a very long string that far exceeds the 80 \\
        column limit. It unfortunately contains long stretches of spaces due \\
        to how the continued lines are indented.';
    </pre>
    
    <p>Instead, write</p>
    
    <pre class="language-js prettyprint">const longString = 'This is a very long string that far exceeds the 80 ' +
        'column limit. It does not contain long stretches of spaces since ' +
        'the concatenated strings are cleaner.';
    </pre>
    
    <h3 id="features-number-literals" style="left: -46px; position: relative;">5.7 Number literals<a href="#features-number-literals" alt="link to features-number-literals"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Numbers may be specified in decimal, hex, octal, or binary.  Use exactly <code>0x</code>,
    <code>0o</code>, and <code>0b</code> prefixes, with lowercase letters, for hex, octal, and binary,
    respectively.  Never include a leading zero unless it is immediately followed by
    <code>x</code>, <code>o</code>, or <code>b</code>.</p>
    
    <h3 id="features-control-structures" style="left: -46px; position: relative;">5.8 Control structures<a href="#features-control-structures" alt="link to features-control-structures"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="features-for-loops" style="left: -46px; position: relative;">5.8.1 For loops<a href="#features-for-loops" alt="link to features-for-loops"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>With ES6, the language now has three different kinds of <code>for</code> loops.  All may be
    used, though <code>for</code>-<code>of</code> loops should be preferred when possible.</p>
    
    <p><code>for</code>-<code>in</code> loops may only be used on dict-style objects (see
    <a href="#features-objects-mixing-keys">5.3.3 Do not mix quoted and unquoted keys</a>), and should not be used to iterate over an
    array.  <code>Object.prototype.hasOwnProperty</code> should be used in <code>for</code>-<code>in</code> loops to
    exclude unwanted prototype properties.  Prefer <code>for</code>-<code>of</code> and <code>Object.keys</code> over
    <code>for</code>-<code>in</code> when possible.</p>
    
    <h4 id="features-exceptions" style="left: -46px; position: relative;">5.8.2 Exceptions<a href="#features-exceptions" alt="link to features-exceptions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Exceptions are an important part of the language and should be used whenever
    exceptional cases occur.  Always throw <code>Error</code>s or subclasses of <code>Error</code>: never
    throw string literals or other objects.  Always use <code>new</code> when constructing an
    <code>Error</code>.</p>
    
    <p>Custom exceptions provide a great way to convey additional error information
    from functions.  They should be defined and used wherever the native <code>Error</code>
    type is insufficient.</p>
    
    <p>Prefer throwing exceptions over ad-hoc error-handling approaches (such as
    passing an error container reference type, or returning an object with an error
    property).</p>
    
    <h5 id="features-empty-catch-blocks">5.8.2.1 Empty catch blocks</h5>
    
    <p>It is very rarely correct to do nothing in response to a caught exception. When
    it truly is appropriate to take no action whatsoever in a catch block, the
    reason this is justified is explained in a comment.</p>
    
    <pre class="language-js prettyprint">try {
      return handleNumericResponse(response);
    } catch (ok) {
      // it's not numeric; that's fine, just continue
    }
    return handleTextResponse(response);
    </pre>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">   try {
        shouldFail();
        fail('expected an error');
      }
      catch (expected) {}
    </pre>
    
    <p class="tip">Tip: Unlike in some other languages, patterns like the above simply don’t work
    since this will catch the error thrown by <code>fail</code>. Use <code>assertThrows()</code> instead.</p>
    
    <h4 id="features-switch-statements" style="left: -46px; position: relative;">5.8.3 Switch statements<a href="#features-switch-statements" alt="link to features-switch-statements"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Terminology Note: Inside the braces of a switch block are one or more statement groups. Each statement group consists of one or more switch labels (either <code>case FOO:</code> or <code>default:</code>), followed by one or more statements.</p>
    
    <h5 id="features-switch-fall-through">5.8.3.1 Fall-through: commented</h5>
    
    <p>Within a switch block, each statement group either terminates abruptly (with a
    <code>break</code>, <code>return</code> or <code>throw</code>n exception), or is marked with a comment to
    indicate that execution will or might continue into the next statement
    group. Any comment that communicates the idea of fall-through is sufficient
    (typically <code>// fall through</code>). This special comment is not required in the last
    statement group of the switch block.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">switch (input) {
      case 1:
      case 2:
        prepareOneOrTwo();
      // fall through
      case 3:
        handleOneTwoOrThree();
        break;
      default:
        handleLargeNumber(input);
    }
    </pre>
    
    <h5 id="features-switch-default-case">5.8.3.2 The <code>default</code> case is present</h5>
    
    <p>Each switch statement includes a <code>default</code> statement group, even if it contains
    no code.</p>
    
    <h3 id="features-this" style="left: -46px; position: relative;">5.9 this<a href="#features-this" alt="link to features-this"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Only use <code>this</code> in class constructors and methods, or in arrow functions defined
    within class constructors and methods. Any other uses of <code>this</code> must have an
    explicit <code>@this</code> declared in the immediately-enclosing function’s JSDoc.</p>
    
    <p>Never use <code>this</code> to refer to the global object, the context of an <code>eval</code>, the
    target of an event, or unnecessarily <code>call()</code>ed or <code>apply()</code>ed functions.</p>
    
    <h3 id="disallowed-features" style="left: -46px; position: relative;">5.10 Disallowed features<a href="#disallowed-features" alt="link to disallowed-features"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="disallowed-features-with" style="left: -46px; position: relative;">5.10.1 with<a href="#disallowed-features-with" alt="link to disallowed-features-with"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not use the <code>with</code> keyword.  It makes your code harder to understand and has
    been banned in strict mode since ES5.</p>
    
    <h4 id="disallowed-features-dynamic-code-evaluation" style="left: -46px; position: relative;">5.10.2 Dynamic code evaluation<a href="#disallowed-features-dynamic-code-evaluation" alt="link to disallowed-features-dynamic-code-evaluation"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not use <code>eval</code> or the <code>Function(...string)</code> constructor (except for code
    loaders).  These features are potentially dangerous and simply do not work in
    CSP environments.</p>
    
    <h4 id="disallowed-features-automatic-semicolon-insertion" style="left: -46px; position: relative;">5.10.3 Automatic semicolon insertion<a href="#disallowed-features-automatic-semicolon-insertion" alt="link to disallowed-features-automatic-semicolon-insertion"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Always terminate statements with semicolons (except function and class
    declarations, as noted above).</p>
    
    <h4 id="disallowed-features-non-standard-features" style="left: -46px; position: relative;">5.10.4 Non-standard features<a href="#disallowed-features-non-standard-features" alt="link to disallowed-features-non-standard-features"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do not use non-standard features.  This includes old features that have been
    removed (e.g., <code>WeakMap.clear</code>), new features that are not yet standardized
    (e.g., the current TC39 working draft, proposals at any stage, or proposed but
    not-yet-complete web standards), or proprietary features that are only
    implemented in some browsers.  Use only features defined in the current ECMA-262
    or WHATWG standards.  (Note that projects writing against specific APIs, such as
    Chrome extensions or Node.js, can obviously use those APIs).  Non-standard
    language “extensions” (such as those provided by some external transpilers) are
    forbidden.</p>
    
    <h4 id="disallowed-features-wrapper-objects" style="left: -46px; position: relative;">5.10.5 Wrapper objects for primitive types<a href="#disallowed-features-wrapper-objects" alt="link to disallowed-features-wrapper-objects"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Never use <code>new</code> on the primitive object wrappers (<code>Boolean</code>, <code>Number</code>, <code>String</code>,
    <code>Symbol</code>), nor include them in type annotations.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">const /** Boolean */ x = new Boolean(false);
    if (x) alert(typeof x);  // alerts 'object' - WAT?
    </pre>
    
    <p>The wrappers may be called as functions for coercing (which is preferred over
    using <code>+</code> or concatenating the empty string) or creating symbols.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">const /** boolean */ x = Boolean(0);
    if (!x) alert(typeof x);  // alerts 'boolean', as expected
    </pre>
    
    <h4 id="disallowed-features-modifying-builtin-objects" style="left: -46px; position: relative;">5.10.6 Modifying builtin objects<a href="#disallowed-features-modifying-builtin-objects" alt="link to disallowed-features-modifying-builtin-objects"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Never modify builtin types, either by adding methods to their constructors or to
    their prototypes.  Avoid depending on libraries that do this.  Note that the
    JSCompiler’s runtime library will provide standards-compliant polyfills where
    possible; nothing else may modify builtin objects.</p>
    
    <p>Do not add symbols to the global object unless absolutely necessary
    (e.g. required by a third-party API).</p>
    
    <h2 id="naming" style="left: -46px; position: relative;">6 Naming<a href="#naming" alt="link to naming"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <h3 id="naming-rules-common-to-all-identifiers" style="left: -46px; position: relative;">6.1 Rules common to all identifiers<a href="#naming-rules-common-to-all-identifiers" alt="link to naming-rules-common-to-all-identifiers"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Identifiers use only ASCII letters and digits, and, in a small number of cases
    noted below, underscores and very rarely (when required by frameworks like
    Angular) dollar signs.</p>
    
    <p>Give as descriptive a name as possible, within reason. Do not worry about saving
    horizontal space as it is far more important to make your code immediately
    understandable by a new reader. Do not use abbreviations that are ambiguous or
    unfamiliar to readers outside your project, and do not abbreviate by deleting
    letters within a word.</p>
    
    <pre class="language-js prettyprint">priceCountReader      // No abbreviation.
    numErrors             // "num" is a widespread convention.
    numDnsConnections     // Most people know what "DNS" stands for.
    </pre>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">n                     // Meaningless.
    nErr                  // Ambiguous abbreviation.
    nCompConns            // Ambiguous abbreviation.
    wgcConnections        // Only your group knows what this stands for.
    pcReader              // Lots of things can be abbreviated "pc".
    cstmrId               // Deletes internal letters.
    kSecondsPerDay        // Do not use Hungarian notation.
    </pre>
    
    <h3 id="naming-rules-by-identifier-type" style="left: -46px; position: relative;">6.2 Rules by identifier type<a href="#naming-rules-by-identifier-type" alt="link to naming-rules-by-identifier-type"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="naming-package-names" style="left: -46px; position: relative;">6.2.1 Package names<a href="#naming-package-names" alt="link to naming-package-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Package names are all <code>lowerCamelCase</code>. For example,
    <code>my.exampleCode.deepSpace</code>, but not <code class="badcode">my.examplecode.deepspace</code> or <code class="badcode">my.example_code.deep_space</code>.</p>
    
    <h4 id="naming-class-names" style="left: -46px; position: relative;">6.2.2 Class names<a href="#naming-class-names" alt="link to naming-class-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Class, interface, record, and typedef names are written in <code>UpperCamelCase</code>.
    Unexported classes are simply locals: they are not marked <code>@private</code> and
    therefore are not named with a trailing underscore.</p>
    
    <p>Type names are typically nouns or noun phrases. For example, <code>Request</code>,
    <code>ImmutableList</code>, or <code>VisibilityMode</code>.  Additionally, interface names may
    sometimes be adjectives or adjective phrases instead (for example, <code>Readable</code>).</p>
    
    <h4 id="naming-method-names" style="left: -46px; position: relative;">6.2.3 Method names<a href="#naming-method-names" alt="link to naming-method-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Method names are written in <code>lowerCamelCase</code>.  Private methods’ names must end
    with a trailing underscore.</p>
    
    <p>Method names are typically verbs or verb phrases. For example, <code>sendMessage</code> or
    <code>stop_</code>.  Getter and setter methods for properties are never required, but if
    they are used they should be named <code>getFoo</code> (or optionally <code>isFoo</code> or <code>hasFoo</code>
    for booleans), or <code>setFoo(value)</code> for setters.</p>
    
    <p>Underscores may also appear in JsUnit test method names to separate logical
    components of the name. One typical pattern is <code>test&lt;MethodUnderTest&gt;_&lt;state&gt;</code>,
    for example <code>testPop_emptyStack</code>. There is no One Correct Way to name test
    methods.</p>
    
    <h4 id="naming-enum-names" style="left: -46px; position: relative;">6.2.4 Enum names<a href="#naming-enum-names" alt="link to naming-enum-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Enum names are written in <code>UpperCamelCase</code>, similar to classes, and should
    generally be singular nouns.  Individual items within the enum are named in
    <code>CONSTANT_CASE</code>.</p>
    
    <h4 id="naming-constant-names" style="left: -46px; position: relative;">6.2.5 Constant names<a href="#naming-constant-names" alt="link to naming-constant-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Constant names use <code>CONSTANT_CASE</code>: all uppercase letters, with words separated
    by underscores. There is no reason for a constant to be named with a trailing
    underscore, since private static properties can be replaced by (implicitly
    private) module locals.</p>
    
    <h5 id="naming-definition-of-constant">6.2.5.1 Definition of “constant”</h5>
    
    <p>Every constant is a <code>@const</code> static property or a module-local <code>const</code>
    declaration, but not all <code>@const</code> static properties and module-local <code>const</code>s
    are constants. Before choosing constant case, consider whether the field really
    feels like a <em>deeply immutable</em> constant. For example, if any of that instance's
    observable state can change, it is almost certainly not a constant. Merely
    intending to never mutate the object is generally not enough.</p>
    
    <p class="examples">Examples:</p>
    
    <pre class="language-js prettyprint">// Constants
    const NUMBER = 5;
    /** @const */ exports.NAMES = ImmutableList.of('Ed', 'Ann');
    /** @enum */ exports.SomeEnum = { ENUM_CONSTANT: 'value' };
    
    // Not constants
    let letVariable = 'non-const';
    class MyClass { constructor() { /** @const */ this.nonStatic = 'non-static'; } };
    /** @type {string} */ MyClass.staticButMutable = 'not @const, can be reassigned';
    const /** Set&lt;String&gt; */ mutableCollection = new Set();
    const /** ImmutableSet&lt;SomeMutableType&gt; */ mutableElements = ImmutableSet.of(mutable);
    const Foo = goog.require('my.Foo');  // mirrors imported name
    const logger = log.getLogger('loggers.are.not.immutable');
    </pre>
    
    <p>Constants’ names are typically nouns or noun phrases.</p>
    
    <h5 id="naming-local-aliases">6.2.5.1 Local aliases</h5>
    
    <p>Local aliases should be used whenever they improve readability over
    fully-qualified names.  Follow the same rules as <code>goog.require</code>s
    (<a href="#file-goog-require">3.4 goog.require statements</a>), maintaining the last part of the aliased name.
    Aliases may also be used within functions.  Aliases must be <code>const</code>.</p>
    
    <p class="examples">Examples:</p>
    
    <pre class="language-js prettyprint">const staticHelper = importedNamespace.staticHelper;
    const CONSTANT_NAME = ImportedClass.CONSTANT_NAME;
    const {assert, assertInstanceof} = asserts;
    </pre>
    
    <h4 id="naming-non-constant-field-names" style="left: -46px; position: relative;">6.2.6 Non-constant field names<a href="#naming-non-constant-field-names" alt="link to naming-non-constant-field-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Non-constant field names (static or otherwise) are written in <code>lowerCamelCase</code>,
    with a trailing underscore for private fields.</p>
    
    <p>These names are typically nouns or noun phrases. For example, <code>computedValues</code>
    or <code>index_</code>.</p>
    
    <h4 id="naming-parameter-names" style="left: -46px; position: relative;">6.2.7 Parameter names<a href="#naming-parameter-names" alt="link to naming-parameter-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Parameter names are written in <code>lowerCamelCase</code>.  Note that this applies even if
    the parameter expects a constructor.</p>
    
    <p>One-character parameter names should not be used in public methods.</p>
    
    <p class="exception"><strong>Exception</strong>: When required by a third-party framework, parameter names may
    begin with a <code>$</code>.  This exception does not apply to any other identifiers
    (e.g. local variables or properties).</p>
    
    <h4 id="naming-local-variable-names" style="left: -46px; position: relative;">6.2.8 Local variable names<a href="#naming-local-variable-names" alt="link to naming-local-variable-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Local variable names are written in <code>lowerCamelCase</code>, except for module-local
    (top-level) constants, as described above.  Constants in function scopes are
    still named in <code>lowerCamelCase</code>.  Note that lowerCamelCase applies even if the
    variable holds a constructor.</p>
    
    <h4 id="naming-template-parameter-names" style="left: -46px; position: relative;">6.2.9 Template parameter names<a href="#naming-template-parameter-names" alt="link to naming-template-parameter-names"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Template parameter names should be concise, single-word or single-letter
    identifiers, and must be all-caps, such as <code>TYPE</code> or <code>THIS</code>.</p>
    
    <h3 id="naming-camel-case-defined" style="left: -46px; position: relative;">6.3 Camel case: defined<a href="#naming-camel-case-defined" alt="link to naming-camel-case-defined"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Sometimes there is more than one reasonable way to convert an English phrase
    into camel case, such as when acronyms or unusual constructs like <q>IPv6</q> or
    <q>iOS</q> are present. To improve predictability, Google Style specifies the
    following (nearly) deterministic scheme.</p>
    
    <p>Beginning with the prose form of the name:</p>
    
    <ol>
    <li>Convert the phrase to plain ASCII and remove any apostrophes. For example,
    <q>Müller's algorithm</q> might become <q>Muellers algorithm</q>.</li>
    <li>Divide this result into words, splitting on spaces and any remaining
    punctuation (typically hyphens).
    <ol>
    <li>Recommended: if any word already has a conventional camel case
    appearance in common usage, split this into its constituent parts (e.g.,
    <q>AdWords</q> becomes <q>ad words</q>). Note that a word such as <q>iOS</q> is not
    really in camel case per se; it defies any convention, so this
    recommendation does not apply.</li>
    </ol></li>
    <li>Now lowercase everything (including acronyms), then uppercase only the first
    character of:
    <ol>
    <li>… each word, to yield upper camel case, or</li>
    <li>… each word except the first, to yield lower camel case</li>
    </ol></li>
    <li>Finally, join all the words into a single identifier.</li>
    </ol>
    
    <p>Note that the casing of the original words is almost entirely disregarded.</p>
    
    <p class="examples">Examples:</p>
    
    <table>
    <thead>
    <tr>
    <th style="text-align: center">Prose form</th>
    <th style="text-align: center">Correct</th>
    <th style="text-align: center">Incorrect</th>
    </tr>
    </thead>
    
    <tbody>
    <tr>
    <td style="text-align: center"><q>XML HTTP request</q></td>
    <td style="text-align: center">XmlHttpRequest</td>
    <td style="text-align: center">XMLHTTPRequest</td>
    </tr>
    <tr>
    <td style="text-align: center"><q>new customer ID</q></td>
    <td style="text-align: center">newCustomerId</td>
    <td style="text-align: center">newCustomerID</td>
    </tr>
    <tr>
    <td style="text-align: center"><q>inner stopwatch</q></td>
    <td style="text-align: center">innerStopwatch</td>
    <td style="text-align: center">innerStopWatch</td>
    </tr>
    <tr>
    <td style="text-align: center"><q>supports IPv6 on iOS?</q></td>
    <td style="text-align: center">supportsIpv6OnIos</td>
    <td style="text-align: center">supportsIPv6OnIOS</td>
    </tr>
    <tr>
    <td style="text-align: center"><q>YouTube importer</q></td>
    <td style="text-align: center">YouTubeImporter</td>
    <td style="text-align: center">YoutubeImporter*</td>
    </tr>
    </tbody>
    </table>
    
    <p>*Acceptable, but not recommended.</p>
    
    <p class="note">Note: Some words are ambiguously hyphenated in the English language: for example <q>nonempty</q> and <q>non-empty</q> are both correct, so the method names checkNonempty and checkNonEmpty are likewise both correct.</p>
    
    <h2 id="jsdoc" style="left: -46px; position: relative;">7 JSDoc<a href="#jsdoc" alt="link to jsdoc"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <p><a href="https://developers.google.com/closure/compiler/docs/js-for-compiler">JSDoc</a> is used on all classes, fields, and methods.</p>
    
    <h3 id="jsdoc-general-form" style="left: -46px; position: relative;">7.1 General form<a href="#jsdoc-general-form" alt="link to jsdoc-general-form"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>The basic formatting of JSDoc blocks is as seen in this example:</p>
    
    <pre class="language-js prettyprint">/**
     * Multiple lines of JSDoc text are written here,
     * wrapped normally.
     * @param {number} arg A number to do something to.
     */
    function doSomething(arg) { … }
    </pre>
    
    <p>or in this single-line example:</p>
    
    <pre class="language-js prettyprint">/** @const @private {!Foo} A short bit of JSDoc. */
    this.foo_ = foo;
    </pre>
    
    <p>If a single-line comment overflows into multiple lines, it must use the
    multi-line style with <code>/**</code> and <code>*/</code> on their own lines.</p>
    
    <p>Many tools extract metadata from JSDoc comments to perform code validation and
    optimization.  As such, these comments <strong>must</strong> be well-formed.</p>
    
    <h3 id="jsdoc-markdown" style="left: -46px; position: relative;">7.2 Markdown<a href="#jsdoc-markdown" alt="link to jsdoc-markdown"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>JSDoc is written in Markdown, though it may include HTML when necessary.</p>
    
    <p>Note that tools that automatically extract JSDoc (e.g. <a href="https://github.com/jleyba/js-dossier">JsDossier</a>) will often
    ignore plain text formatting, so if you did this:</p>
    
    <pre class="language-js prettyprint badcode">/**
     * Computes weight based on three factors:
     *   items sent
     *   items received
     *   last timestamp
     */
    </pre>
    
    <p>it would come out like this:</p>
    
    <pre class="">Computes weight based on three factors: items sent items received last timestamp
    </pre>
    
    <p>Instead, write a Markdown list:</p>
    
    <pre class="language-js prettyprint">/**
     * Computes weight based on three factors:
     *  - items sent
     *  - items received
     *  - last timestamp
     */
    </pre>
    
    <h3 id="jsdoc-tags" style="left: -46px; position: relative;">7.3 JSDoc tags<a href="#jsdoc-tags" alt="link to jsdoc-tags"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Google style allows a subset of JSDoc tags.  See
    <a href="#appendices-jsdoc-tag-reference">9.1 JSDoc tag reference</a> for the complete list.  Most tags must
    occupy their own line, with the tag at the beginning of the line.</p>
    
    <p class="illegal">Illegal:</p>
    
    <pre class="language-js prettyprint badcode">/**
     * The "param" tag must occupy its own line and may not be combined.
     * @param {number} left @param {number} right
     */
    function add(left, right) { ... }
    </pre>
    
    <p>Simple tags that do not require any additional data (such as <code>@private</code>,
    <code>@const</code>, <code>@final</code>, <code>@export</code>) may be combined onto the same line, along with an
    optional type when appropriate.</p>
    
    <pre class="language-js prettyprint">/**
     * Place more complex annotations (like "implements" and "template")
     * on their own lines.  Multiple simple tags (like "export" and "final")
     * may be combined in one line.
     * @export @final
     * @implements {Iterable&lt;TYPE&gt;}
     * @template TYPE
     */
    class MyClass {
      /**
       * @param {!ObjType} obj Some object.
       * @param {number=} num An optional number.
       */
      constructor(obj, num = 42) {
        /** @private @const {!Array&lt;!ObjType|number&gt;} */
        this.data_ = [obj, num];
      }
    }
    </pre>
    
    <p>There is no hard rule for when to combine tags, or in which order, but be
    consistent.</p>
    
    <p>For general information about annotating types in JavaScript see
    <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">Annotating JavaScript for the Closure Compiler</a> and <a href="https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System">Types in the Closure Type
    System</a>.</p>
    
    <h3 id="jsdoc-line-wrapping" style="left: -46px; position: relative;">7.4 Line wrapping<a href="#jsdoc-line-wrapping" alt="link to jsdoc-line-wrapping"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Line-wrapped block tags are indented four spaces.  Wrapped description text may
    be lined up with the description on previous lines, but this horizontal
    alignment is discouraged.</p>
    
    <pre class="language-js prettyprint">/**
     * Illustrates line wrapping for long param/return descriptions.
     * @param {string} foo This is a param with a description too long to fit in
     *     one line.
     * @return {number} This returns something that has a description too long to
     *     fit in one line.
     */
    exports.method = function(foo) {
      return 5;
    };
    </pre>
    
    <p>Do not indent when wrapping a <code>@fileoverview</code> description.</p>
    
    <h3 id="jsdoc-top-file-level-comments" style="left: -46px; position: relative;">7.5 Top/file-level comments<a href="#jsdoc-top-file-level-comments" alt="link to jsdoc-top-file-level-comments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>A file may have a top-level file overview. A copyright notice , author information, and
    default <a href="#jsdoc-visibility-annotations">visibility level</a> are optional.  File overviews are generally recommended whenever a
    file consists of more than a single class definition. The top level comment is
    designed to orient readers unfamiliar with the code to what is in this file. If
    present, it may provide a description of the file's contents and any
    dependencies or compatibility information. Wrapped lines are not indented.</p>
    
    <p class="example">Example:</p>
    
    <pre class="language-js prettyprint">/**
     * @fileoverview Description of file, its uses and information
     * about its dependencies.
     * @package
     */
    </pre>
    
    <h3 id="jsdoc-class-comments" style="left: -46px; position: relative;">7.6 Class comments<a href="#jsdoc-class-comments" alt="link to jsdoc-class-comments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Classes, interfaces and records must be documented with a description and any
    template parameters, implemented interfaces, visibility, or other appropriate
    tags. The class description should provide the reader with enough information to
    know how and when to use the class, as well as any additional considerations
    necessary to correctly use the class. Textual descriptions may be omitted on the
    constructor. <code>@constructor</code> and <code>@extends</code> annotations are not used with the
    <code>class</code> keyword unless the class is being used to declare an <code>@interface</code> or
    it extends a generic class.</p>
    
    <pre class="language-js prettyprint">/**
     * A fancier event target that does cool things.
     * @implements {Iterable&lt;string&gt;}
     */
    class MyFancyTarget extends EventTarget {
      /**
       * @param {string} arg1 An argument that makes this more interesting.
       * @param {!Array&lt;number&gt;} arg2 List of numbers to be processed.
       */
      constructor(arg1, arg2) {
        // ...
      }
    };
    
    /**
     * Records are also helpful.
     * @extends {Iterator&lt;TYPE&gt;}
     * @record
     * @template TYPE
     */
    class Listable {
      /** @return {TYPE} The next item in line to be returned. */
      next() {}
    }
    </pre>
    
    <h3 id="jsdoc-enum-and-typedef-comments" style="left: -46px; position: relative;">7.7 Enum and typedef comments<a href="#jsdoc-enum-and-typedef-comments" alt="link to jsdoc-enum-and-typedef-comments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Enums and typedefs must be documented.  Public enums and typedefs must have a
    non-empty description.  Individual enum items may be documented with a JSDoc
    comment on the preceding line.</p>
    
    <pre class="language-js prettyprint">/**
     * A useful type union, which is reused often.
     * @typedef {!Bandersnatch|!BandersnatchType}
     */
    let CoolUnionType;
    
    
    /**
     * Types of bandersnatches.
     * @enum {string}
     */
    const BandersnatchType = {
      /** This kind is really frumious. */
      FRUMIOUS: 'frumious',
      /** The less-frumious kind. */
      MANXOME: 'manxome',
    };
    </pre>
    
    <p>Typedefs are useful for defining short record types, or aliases for unions,
    complex functions, or generic types.
    Typedefs should be avoided for record types with many fields, since they do not
    allow documenting individual fields, nor using templates or recursive
    references.
    For large record types, prefer <code>@record</code>.</p>
    
    <h3 id="jsdoc-method-and-function-comments" style="left: -46px; position: relative;">7.8 Method and function comments<a href="#jsdoc-method-and-function-comments" alt="link to jsdoc-method-and-function-comments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Parameter and return types must be documented. The <code>this</code> type should be
    documented when necessary. Method, parameter, and return descriptions (but not
    types) may be omitted if they are obvious from the rest of the method’s JSDoc or
    from its signature. Method descriptions should start with a sentence written in
    the third person declarative voice.  If a method overrides a superclass method,
    it must include an <code>@override</code> annotation.  Overridden methods must include all
    <code>@param</code> and <code>@return</code> annotations if any types are refined, but should omit
    them if the types are all the same.</p>
    
    <pre class="language-js prettyprint">/** This is a class. */
    class SomeClass extends SomeBaseClass {
      /**
       * Operates on an instance of MyClass and returns something.
       * @param {!MyClass} obj An object that for some reason needs detailed
       *     explanation that spans multiple lines.
       * @param {!OtherClass} obviousOtherClass
       * @return {boolean} Whether something occurred.
       */
      someMethod(obj, obviousOtherClass) { ... }
    
      /** @override */
      overriddenMethod(param) { ... }
    }
    
    /**
     * Demonstrates how top-level functions follow the same rules.  This one
     * makes an array.
     * @param {TYPE} arg
     * @return {!Array&lt;TYPE&gt;}
     * @template TYPE
     */
    function makeArray(arg) { ... }
    </pre>
    
    
    
    <p>Anonymous functions do not require JSDoc, though parameter types may be specified inline if the automatic type inference is insufficient.</p>
    
    <pre class="language-js prettyprint">promise.then(
        (/** !Array&lt;number|string&gt; */ items) =&gt; {
          doSomethingWith(items);
          return /** @type {string} */ (items[0]);
        });
    </pre>
    
    <h3 id="jsdoc-property-comments" style="left: -46px; position: relative;">7.9 Property comments<a href="#jsdoc-property-comments" alt="link to jsdoc-property-comments"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Property types must be documented. The description may be omitted for private
    properties, if name and type provide enough documentation for understanding the
    code.</p>
    
    <p>Publicly exported constants are commented the same way as properties.  Explicit
    types may be omitted for <code>@const</code> properties initialized from an expression with
    an obviously known type.</p>
    
    <p class="tip">Tip: A <code>@const</code> property’s type can be considered “obviously known” if it is
    assigned directly from a constructor parameter with a declared type, or directly
    from a function call with a declared return type.  Non-const properties and
    properties assigned from more complex expressions should have their types
    declared explicitly.</p>
    
    <pre class="language-js prettyprint">/** My class. */
    class MyClass {
      /** @param {string=} someString */
      constructor(someString = 'default string') {
        /** @private @const */
        this.someString_ = someString;
    
        /** @private @const {!OtherType} */
        this.someOtherThing_ = functionThatReturnsAThing();
    
        /**
         * Maximum number of things per pane.
         * @type {number}
         */
        this.someProperty = 4;
      }
    }
    
    /**
     * The number of times we'll try before giving up.
     * @const
     */
    MyClass.RETRY_COUNT = 33;
    </pre>
    
    <h3 id="jsdoc-type-annotations" style="left: -46px; position: relative;">7.10 Type annotations<a href="#jsdoc-type-annotations" alt="link to jsdoc-type-annotations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Type annotations are found on <code>@param</code>, <code>@return</code>, <code>@this</code>, and <code>@type</code> tags,
    and optionally on <code>@const</code>, <code>@export</code>, and any visibility tags.  Type
    annotations attached to JSDoc tags must always be enclosed in braces.</p>
    
    <h4 id="jsdoc-nullability" style="left: -46px; position: relative;">7.10.1 Nullability<a href="#jsdoc-nullability" alt="link to jsdoc-nullability"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The type system defines modifiers <code>!</code> and <code>?</code> for non-null and nullable,
    respectively.  Primitive types (<code>undefined</code>, <code>string</code>, <code>number</code>, <code>boolean</code>,
    <code>symbol</code>, and <code>function(...): ...</code>) and record literals (<code>{foo: string, bar:
    number}</code>) are non-null by default.  Do not add an explicit <code>!</code> to these types.
    Object types (<code>Array</code>, <code>Element</code>, <code>MyClass</code>, etc) are nullable by default, but
    cannot be immediately distinguished from a name that is <code>@typedef</code>’d to a
    non-null-by-default type.  As such, all types except primitives and record
    literals must be annotated explicitly with either <code>?</code> or <code>!</code> to indicate whether
    they are nullable or not.</p>
    
    <h4 id="jsdoc-type-casts" style="left: -46px; position: relative;">7.10.2 Type Casts<a href="#jsdoc-type-casts" alt="link to jsdoc-type-casts"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>In cases where type checking doesn't accurately infer the type of an expression,
    it is possible to tighten the type by adding a type annotation comment and
    enclosing the expression in parentheses. Note that the parentheses are required.</p>
    
    <pre class="language-js prettyprint">/** @type {number} */ (x)
    </pre>
    
    <h4 id="jsdoc-template-parameter-types" style="left: -46px; position: relative;">7.10.3 Template Parameter Types<a href="#jsdoc-template-parameter-types" alt="link to jsdoc-template-parameter-types"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Always specify template parameters. This way compiler can do a better job and it
    makes it easier for readers to understand what code does.</p>
    
    <p class="bad">Bad:</p>
    
    <pre class="language-js prettyprint badcode">const /** !Object */ users = {};
    const /** !Array */ books = [];
    const /** !Promise */ response = ...;
    </pre>
    
    <p class="good">Good:</p>
    
    <pre class="language-js prettyprint">const /** !Object&lt;string, !User&gt; */ users = {};
    const /** !Array&lt;string&gt; */ books = [];
    const /** !Promise&lt;!Response&gt; */ response = ...;
    
    const /** !Promise&lt;undefined&gt; */ thisPromiseReturnsNothingButParameterIsStillUseful = ...;
    const /** !Object&lt;string, *&gt; */ mapOfEverything = {};
    </pre>
    
    <p>Cases when template parameters should not be used:</p>
    
    <ul>
    <li><code>Object</code> is used for type hierarchy and not as map-like structure.</li>
    </ul>
    
    <h3 id="jsdoc-visibility-annotations" style="left: -46px; position: relative;">7.11 Visibility annotations<a href="#jsdoc-visibility-annotations" alt="link to jsdoc-visibility-annotations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Visibility annotations (<code>@private</code>, <code>@package</code>, <code>@protected</code>) may be specified
    in a <code>@fileoverview</code> block, or on any exported symbol or property.  Do not
    specify visibility for local variables, whether within a function or at the top
    level of a module.  All <code>@private</code> names must end with an underscore.</p>
    
    <h2 id="policies" style="left: -46px; position: relative;">8 Policies<a href="#policies" alt="link to policies"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <h3 id="policies-be-consistent" style="left: -46px; position: relative;">8.1 Issues unspecified by Google Style: Be Consistent!<a href="#policies-be-consistent" alt="link to policies-be-consistent"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>For any style question that isn't settled definitively by this specification,
    prefer to do what the other code in the same file is already doing. If that
    doesn't resolve the question, consider emulating the other files in the same
    package.</p>
    
    <h3 id="policies-compiler-warnings" style="left: -46px; position: relative;">8.2 Compiler warnings<a href="#policies-compiler-warnings" alt="link to policies-compiler-warnings"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="policies-use-a-standard-warning-set" style="left: -46px; position: relative;">8.2.1 Use a standard warning set<a href="#policies-use-a-standard-warning-set" alt="link to policies-use-a-standard-warning-set"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>
    As far as possible projects should use <code>--warning_level=VERBOSE</code>.
    </p>
    
    <h4 id="policies-how-to-handle-a-warning" style="left: -46px; position: relative;">8.2.2 How to handle a warning<a href="#policies-how-to-handle-a-warning" alt="link to policies-how-to-handle-a-warning"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Before doing anything, make sure you understand exactly what the warning is
    telling you. If you're not positive why a warning is appearing, ask for help
    .</p>
    
    <p>Once you understand the warning, attempt the following solutions in order:</p>
    
    <ol>
    <li><strong>First, fix it or work around it.</strong> Make a strong attempt to actually
    address the warning, or find another way to accomplish the task that avoids
    the situation entirely.</li>
    <li><strong>Otherwise, determine if it's a false alarm.</strong> If you are convinced that
    the warning is invalid and that the code is actually safe and correct, add a
    comment to convince the reader of this fact and apply the <code>@suppress</code>
    annotation.</li>
    <li><strong>Otherwise, leave a TODO comment.</strong> This is a <strong>last resort</strong>.  If you do
    this, <strong>do not suppress the warning.</strong> The warning should be visible until
    it can be taken care of properly.</li>
    </ol>
    
    <h4 id="policies-suppress-a-warning-at-the-narrowest-reasonable-scope" style="left: -46px; position: relative;">8.2.3 Suppress a warning at the narrowest reasonable scope<a href="#policies-suppress-a-warning-at-the-narrowest-reasonable-scope" alt="link to policies-suppress-a-warning-at-the-narrowest-reasonable-scope"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Warnings are suppressed at the narrowest reasonable scope, usually that of a single local variable or very small method. Often a variable or method is extracted for that reason alone.</p>
    
    <p>Example</p>
    
    <pre class="language-js prettyprint">/** @suppress {uselessCode} Unrecognized 'use asm' declaration */
    function fn() {
      'use asm';
      return 0;
    }
    </pre>
    
    <p>Even a large number of suppressions in a class is still better than blinding the
    entire class to this type of warning.</p>
    
    <h3 id="policies-deprecation" style="left: -46px; position: relative;">8.3 Deprecation<a href="#policies-deprecation" alt="link to policies-deprecation"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Mark deprecated methods, classes or interfaces with <code>@deprecated</code> annotations. A
    deprecation comment must include simple, clear directions for people to fix
    their call sites.</p>
    
    <h3 id="policies-code-not-in-google-style" style="left: -46px; position: relative;">8.4 Code not in Google Style<a href="#policies-code-not-in-google-style" alt="link to policies-code-not-in-google-style"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>You will occasionally encounter files in your codebase that are not in proper
    Google Style. These may have come from an acquisition, or may have been written
    before Google Style took a position on some issue, or may be in non-Google Style
    for any other reason.</p>
    
    <h4 id="policies-reformatting-existing-code" style="left: -46px; position: relative;">8.4.1 Reformatting existing code<a href="#policies-reformatting-existing-code" alt="link to policies-reformatting-existing-code"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>When updating the style of existing code, follow these guidelines.</p>
    
    <ol>
    <li>It is not required to change all existing code to meet current style
    guidelines.  Reformatting existing code is a trade-off between code churn
    and consistency. Style rules evolve over time and these kinds of tweaks to
    maintain compliance would create unnecessary churn.  However, if significant
    changes are being made to a file it is expected that the file will be in
    Google Style.</li>
    <li>Be careful not to allow opportunistic style fixes to muddle the focus of a
    CL. If you find yourself making a lot of style changes that aren’t critical
    to the central focus of a CL, promote those changes to a separate CL.</li>
    </ol>
    
    <h4 id="policies-newly-added-code-use-google-style" style="left: -46px; position: relative;">8.4.2 Newly added code: use Google Style<a href="#policies-newly-added-code-use-google-style" alt="link to policies-newly-added-code-use-google-style"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Brand new files use Google Style, regardless of the style choices of other files
    in the same package.</p>
    
    <p>When adding new code to a file that is not in Google Style, reformatting the
    existing code first is recommended, subject to the advice in
    <a href="#policies-reformatting-existing-code">8.4.1 Reformatting existing code</a>.</p>
    
    <p>If this reformatting is not done, then new code should be as consistent as
    possible with existing code in the same file, but must not violate the style
    guide.</p>
    
    <h3 id="policies-local-style-rules" style="left: -46px; position: relative;">8.5 Local style rules<a href="#policies-local-style-rules" alt="link to policies-local-style-rules"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Teams and projects may adopt additional style rules beyond those in this
    document, but must accept that cleanup changes may not abide by these additional
    rules, and must not block such cleanup changes due to violating any additional
    rules. Beware of excessive rules which serve no purpose. The style guide does
    not seek to define style in every possible scenario and neither should you.</p>
    
    <h3 id="policies-generated-code-mostly-exempt" style="left: -46px; position: relative;">8.6 Generated code: mostly exempt<a href="#policies-generated-code-mostly-exempt" alt="link to policies-generated-code-mostly-exempt"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Source code generated by the build process is not required to be in Google
    Style. However, any generated identifiers that will be referenced from
    hand-written source code must follow the naming requirements. As a special
    exception, such identifiers are allowed to contain underscores, which may help
    to avoid conflicts with hand-written identifiers.</p>
    
    <h2 id="appendices" style="left: -46px; position: relative;">9 Appendices<a href="#appendices" alt="link to appendices"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h2>
    
    <h3 id="appendices-jsdoc-tag-reference" style="left: -46px; position: relative;">9.1 JSDoc tag reference<a href="#appendices-jsdoc-tag-reference" alt="link to appendices-jsdoc-tag-reference"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>JSDoc serves multiple purposes in JavaScript.  In addition to being used to
    generate documentation it is also used to control tooling.  The best known are
    the Closure Compiler type annotations.</p>
    
    <h4 id="appendices-type-annotations" style="left: -46px; position: relative;">9.1.1 Type annotations and other Closure Compiler annotations<a href="#appendices-type-annotations" alt="link to appendices-type-annotations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Documentation for JSDoc used by the Closure Compiler is described in
    <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">Annotating JavaScript for the Closure Compiler</a> and <a href="https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System">Types in the Closure Type
    System</a>.</p>
    
    <h4 id="appendices-documentation-annotations" style="left: -46px; position: relative;">9.1.2 Documentation annotations<a href="#appendices-documentation-annotations" alt="link to appendices-documentation-annotations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>In addition to the JSDoc described in <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">Annotating JavaScript for the Closure
    Compiler</a> the following tags are common and well supported by various
    documentation generations tools (such as <a href="https://github.com/jleyba/js-dossier">JsDossier</a>) for purely documentation
    purposes.
    </p><table>
      <thead>
        <tr>
          <th>Tag
          </th><th>Template &amp; Examples
          </th><th>Description
      </th></tr></thead><tbody>
        <tr>
          <td><code>@author</code> or <code>@owner</code>
          </td><td><code>@author username@google.com (First Last)</code>
            <p><em>For example:</em>
            </p><pre class="prettyprint lang-js">/**
     * @fileoverview Utilities for handling textareas.
     * @author <a href="mailto:kuth@google.com">kuth@google.com</a> (Uthur Pendragon)
     */
     </pre>
          </td><td>Document the author of a file or the owner of a test, generally only
            used in the <code>@fileoverview</code> comment. The <code>@owner</code> tag is used by the
            unit test dashboard to determine who owns the test results.
            <p>Not recommended.
        </p></td></tr><tr>
          <td><code>@bug</code>
          </td><td><code>@bug bugnumber</code>
            <p><em>For example:</em>
            </p><pre class="prettyprint lang-js">/** @bug 1234567 */
    function testSomething() {
      // …
    }
    
    <p>/**
     * @bug 1234568
     * @bug 1234569
     */
    function testTwoBugs() {
      // …
    }
    </p></pre>
          </td><td>Indicates what bugs the given test function regression tests.
            <p>Multiple bugs should each have their own <code>@bug</code> line, to make
            searching for regression tests as easy as possible.
        </p></td></tr><tr>
          <td><code>@code</code>
          </td><td><code>{@code ...}</code>
            <p><em>For example:</em>
            </p><pre class="prettyprint lang-js">/**
     * Moves to the next position in the selection.
     * Throws {@code goog.iter.StopIteration} when it
     * passes the end of the range.
     * @return {!Node} The node at the next position.
     */
    goog.dom.RangeIterator.prototype.next = function() {
      // …
    };
    </pre>
          </td><td>Indicates that a term in a JSDoc description is code so it may be
            correctly formatted in generated documentation.
        </td></tr><tr>
          <td><code>@see</code>
          </td><td><code>@see Link</code>
            <p><em>For example:</em>
            </p><pre class="prettyprint lang-js">/**
     * Adds a single item, recklessly.
     * @see #addSafely
     * @see goog.Collect
     * @see goog.RecklessAdder#add
     */
     </pre>
           </td><td>Reference a lookup to another class function or method.
        </td></tr><tr>
          <td><code>@supported</code>
          </td><td><code>@supported Description</code>
            <p><em>For example:</em>
            </p><pre class="prettyprint lang-js">/**
     * @fileoverview Event Manager
     * Provides an abstracted interface to the
     * browsers' event systems.
     * @supported IE10+, Chrome, Safari
     */
    </pre>
          </td><td>Used in a fileoverview to indicate what browsers are supported by
            the file.
        </td></tr><tr>
          <td><code>@desc</code>
          </td><td><code>@desc Message description</code>
            <p><em>For example:</em>
            </p><pre class="prettyprint lang-js">/** @desc Notifying a user that their account has been created. */
    exports.MSG_ACCOUNT_CREATED = goog.getMsg(
        'Your account has been successfully created.');
     </pre>
          </td></tr></tbody></table><p></p>
    
    <p>You may also see other types of JSDoc annotations in third-party code. These
    annotations appear in the <a href="http://code.google.com/p/jsdoc-toolkit/wiki/TagReference">JSDoc Toolkit Tag Reference</a> but are not considered
    part of valid Google style.</p>
    
    <h4 id="appendices-framework-specific-annotations" style="left: -46px; position: relative;">9.1.3 Framework specific annotations<a href="#appendices-framework-specific-annotations" alt="link to appendices-framework-specific-annotations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The following annotations are specific to a particular framework.
    </p><table>
      <thead>
        <tr>
          <th>Framework
          </th><th>Tag
          </th><th>Documentation
      </th></tr></thead><tbody>
        <tr>
          <td>Angular 1
          </td><td><code>@ngInject</code>
          </td></tr><tr>
          <td>Polymer
          </td><td><code>@polymerBehavior</code>
          </td><td>
              
                <a href="https://github.com/google/closure-compiler/wiki/Polymer-Pass">https://github.com/google/closure-compiler/wiki/Polymer-Pass</a>
              
        </td></tr></tbody></table><p></p>
    
    <h4 id="appendices-notes-about-standard-closure-compiler-annotations" style="left: -46px; position: relative;">9.1.4 Notes about standard Closure Compiler annotations<a href="#appendices-notes-about-standard-closure-compiler-annotations" alt="link to appendices-notes-about-standard-closure-compiler-annotations"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The following tags used to be standard but are now deprecated.
    </p><table>
      <thead>
        <tr>
          <th>Tag
          </th><th>Template &amp; Examples
          </th><th>Description
      </th></tr></thead><tbody>
        <tr>
          <td><code>@expose</code>
          </td><td><code>@expose</code>
          </td><td><strong>Deprecated. Do not use. Use <code>@export</code> and/or <code>@nocollapse</code>
            instead.</strong>
        </td></tr><tr>
          <td><code>@inheritDoc</code>
          </td><td><code>@inheritDoc</code>
          </td><td><strong>Deprecated. Do not use. Use <code>@override</code> instead.</strong>
    </td></tr></tbody></table><p></p>
    
    <h3 id="appendices-commonly-misunderstood-style-rules" style="left: -46px; position: relative;">9.2 Commonly misunderstood style rules<a href="#appendices-commonly-misunderstood-style-rules" alt="link to appendices-commonly-misunderstood-style-rules"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>Here is a collection of lesser-known or commonly misunderstood facts about
    Google Style for JavaScript. (The following are true statements; this is not a
    list of <q>myths.</q>)</p>
    
    <ul>
    <li>Neither a copyright statement nor <code>@author</code> credit is required in a source
    file. (Neither is explicitly recommended, either.)</li>
    <li>Aside from the constructor coming first
    (<a href="#features-classes-constructors">5.4.1 Constructors</a>), there is no <q>hard and fast</q> rule
    governing how to order the members of a class (<a href="#features-classes">5.4 Classes</a>).</li>
    <li>Empty blocks can usually be represented concisely as <code>{}</code>, as detailed in
    (<a href="#formatting-empty-blocks">4.1.3 Empty blocks: may be concise</a>).</li>
    <li>The prime directive of line-wrapping is: prefer to break at a higher
    syntactic level (<a href="#formatting-where-to-break">4.5.1 Where to break</a>).</li>
    <li>Non-ASCII characters are allowed in string literals, comments and Javadoc,
    and in fact are recommended when they make the code easier to read than the
    equivalent Unicode escape would (<a href="#non-ascii-characters">2.3.3 Non-ASCII characters</a>).</li>
    </ul>
    
    <h3 id="appendices-style-related-tools" style="left: -46px; position: relative;">9.3 Style-related tools<a href="#appendices-style-related-tools" alt="link to appendices-style-related-tools"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <p>The following tools exist to support various aspects of Google Style.</p>
    
    <h4 id="appendices-tools-closure-compiler" style="left: -46px; position: relative;">9.3.1 Closure Compiler<a href="#appendices-tools-closure-compiler" alt="link to appendices-tools-closure-compiler"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>This program performs type checking and other checks,
    optimizations and other transformations (such as ECMAScript 6 to ECMAScript 5
    code lowering).</p>
    
    <h4 id="appendices-clang-format" style="left: -46px; position: relative;">9.3.2 <code>clang-format</code><a href="#appendices-clang-format" alt="link to appendices-clang-format"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>This program  reformats
    JavaScript source code into Google Style, and also follows a number of
    non-required but frequently readability-enhancing formatting practices.</p>
    
    <p><code>clang-format</code> is not required. Authors are allowed to change its output, and
    reviewers are allowed to ask for such changes; disputes are worked out in the
    usual way. However, subtrees may choose to opt in to such enforcement locally.</p>
    
    <h4 id="appendices-closure-compiler-linter" style="left: -46px; position: relative;">9.3.3 Closure compiler linter<a href="#appendices-closure-compiler-linter" alt="link to appendices-closure-compiler-linter"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>This program  checks for a
    variety of missteps and anti-patterns.
    </p>
    
    <h4 id="appendices-conformance-framework" style="left: -46px; position: relative;">9.3.4 Conformance framework<a href="#appendices-conformance-framework" alt="link to appendices-conformance-framework"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>The JS Conformance Framework is a tool that is part of the Closure Compiler that
    provides developers a simple means to specify a set of additional checks to be
    run against their code base above the standard checks.  Conformance checks can,
    for example, forbid access to a certain property, or calls to a certain
    function, or missing type information (unknowns).</p>
    
    <p>These rules are commonly used to enforce critical restrictions (such as defining
    globals, which could break the codebase) and security patterns (such as using
    <code>eval</code> or assigning to <code>innerHTML</code>), or more loosely to improve code quality.</p>
    
    <p>For additional information see the official documentation for the
    <a href="https://github.com/google/closure-compiler/wiki/JS-Conformance-Framework">JS Conformance Framework</a>.</p>
    
    <h3 id="appendices-legacy-exceptions" style="left: -46px; position: relative;">9.4 Exceptions for legacy platforms<a href="#appendices-legacy-exceptions" alt="link to appendices-legacy-exceptions"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h3>
    
    <h4 id="appendices-legacy-exceptions-overview" style="left: -46px; position: relative;">9.4.1 Overview<a href="#appendices-legacy-exceptions-overview" alt="link to appendices-legacy-exceptions-overview"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>This section describes exceptions and additional rules to be followed when
    modern ECMAScript 6 syntax is not available to the code authors. Exceptions to
    the recommended style are required when ECMAScript 6 syntax is not possible and
    are outlined here:</p>
    
    <ul>
    <li>Use of <code>var</code> declarations is allowed</li>
    <li>Use of <code>arguments</code> is allowed</li>
    <li>Optional parameters without default values are allowed</li>
    </ul>
    
    <h4 id="appendices-legacy-exceptions-var" style="left: -46px; position: relative;">9.4.2 Use <code>var</code><a href="#appendices-legacy-exceptions-var" alt="link to appendices-legacy-exceptions-var"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <h5 id="appendices-legacy-exceptions-var-scope">9.4.2.1 <code>var</code> declarations are NOT block-scoped</h5>
    
    <p><code>var</code> declarations are scoped to the beginning of the nearest enclosing
    function, script or module, which can cause unexpected behavior, especially with
    function closures that reference <code>var</code> declarations inside of loops. The
    following code gives an example:</p>
    
    <pre class="language-js prettyprint badcode">for (var i = 0; i &lt; 3; ++i) {
      var iteration = i;
      setTimeout(function() { console.log(iteration); }, i*1000);
    }
    
    // logs 2, 2, 2 -- NOT 0, 1, 2
    // because \`iteration\` is function-scoped, not local to the loop.
    
    </pre>
    
    <h5 id="appendices-legacy-exceptions-var-declare">9.4.2.2 Declare variables as close as possible to first use</h5>
    
    <p>Even though <code>var</code> declarations are scoped to the beginning of the enclosing
    function, <code>var</code> declarations should be as close as possible to their first use,
    for readability purposes. However, do not put a <code>var</code> declaration inside a block
    if that variable is referenced outside the block. For example:</p>
    
    <pre class="language-js prettyprint">function sillyFunction() {
      var count = 0;
      for (var x in y) {
        // "count" could be declared here, but don't do that.
        count++;
      }
      console.log(count + ' items in y');
    }
    </pre>
    
    <h5 id="appendices-legacy-exceptions-var-const">9.4.2.3 Use @const for constants variables</h5>
    
    <p>For global declarations where the <code>const</code> keyword would be used, if it were
    available, annotate the <code>var</code> declaration with @const instead (this is optional
    for local variables).</p>
    
    <h4 id="appendices-legacy-exceptions-function" style="left: -46px; position: relative;">9.4.3 Do not use block scoped functions declarations<a href="#appendices-legacy-exceptions-function" alt="link to appendices-legacy-exceptions-function"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p>Do <strong>not</strong> do this:</p>
    
    <pre class="language-js prettyprint badcode">if (x) {
      function foo() {}
    }
    </pre>
    
    <p>While most JavaScript VMs implemented before ECMAScript 6 support function
    declarations within blocks it was not standardized. Implementations were
    inconsistent with each other and with the now-standard ECMAScript 6 behavior for
    block scoped function declaration. ECMAScript 5 and prior only allow for
    function declarations in the root statement list of a script or function and
    explicitly ban them in block scopes in strict mode.</p>
    
    <p>To get consistent behavior, instead use a <code>var</code> initialized with a function
    expression to define a function within a block:</p>
    
    <pre class="language-js prettyprint">if (x) {
      var foo = function() {};
    }
    </pre>
    
    <h4 id="appendices-legacy-exceptions-goog-provide" style="left: -46px; position: relative;">9.4.4 Dependency management with <code>goog.provide</code>/<code>goog.require</code><a href="#appendices-legacy-exceptions-goog-provide" alt="link to appendices-legacy-exceptions-goog-provide"><img src="https://google.github.io/styleguide/include/link.png" width="21" height="21" style="float:left;position:relative;bottom:5px;"></a></h4>
    
    <p><strong><code>goog.provide</code> is deprecated. All new files should use <code>goog.module</code>, even in
    projects with existing <code>goog.provide</code> usage. The following rules are for
    pre-existing goog.provide files, only.</strong></p>
    
    <h5 id="appendices-legacy-exceptions-goog-provide-summary">9.4.4.1 Summary</h5>
    
    <ul>
    <li>Place all <code>goog.provide</code>s first, <code>goog.require</code>s second. Separate provides
    from requires with an empty line.</li>
    <li>Sort the entries alphabetically (uppercase first).</li>
    <li>Don't wrap <code>goog.provide</code> and <code>goog.require</code> statements. Exceed 80 columns
    if necessary.</li>
    <li>Only provide top-level symbols.</li>
    </ul>
    
    <p>As of Oct 2016, <strong><code>goog.provide</code>/<code>goog.require</code> dependency management is
    deprecated</strong>. All new files, even in projects using <code>goog.provide</code> for older
    files, should use
    <a href="#source-file-structure"><code>goog.module</code></a>.</p>
    
    <p><code>goog.provide</code> statements should be grouped together and placed first. All
    <code>goog.require</code> statements should follow. The two lists should be separated with
    an empty line.</p>
    
    <p>Similar to import statements in other languages, <code>goog.provide</code> and
    <code>goog.require</code> statements should be written in a single line, even if they
    exceed the 80 column line length limit.</p>
    
    <p>The lines should be sorted alphabetically, with uppercase letters coming first:</p>
    
    <pre class="language-js prettyprint">goog.provide('namespace.MyClass');
    goog.provide('namespace.helperFoo');
    
    goog.require('an.extremelyLongNamespace.thatSomeoneThought.wouldBeNice.andNowItIsLonger.Than80Columns');
    goog.require('goog.dom');
    goog.require('goog.dom.TagName');
    goog.require('goog.dom.classes');
    goog.require('goog.dominoes');
    
    </pre>
    
    <p>All members defined on a class should be in the same file. Only top-level
    classes should be provided in a file that contains multiple members defined on
    the same class (e.g. enums, inner classes, etc).</p>
    
    <p>Do this:</p>
    
    <pre class="language-js prettyprint">goog.provide('namespace.MyClass');
    </pre>
    
    <p>Not this:</p>
    
    <pre class="language-js prettyprint badcode">goog.provide('namespace.MyClass');
    goog.provide('namespace.MyClass.CONSTANT');
    goog.provide('namespace.MyClass.Enum');
    goog.provide('namespace.MyClass.InnerClass');
    goog.provide('namespace.MyClass.TypeDef');
    goog.provide('namespace.MyClass.staticMethod');
    </pre>
    
    <p>Members on namespaces may also be provided:</p>
    
    <pre class="language-js prettyprint">goog.provide('foo.bar');
    goog.provide('foo.bar.CONSTANT');
    goog.provide('foo.bar.method');
    </pre>
    
    <h5 id="appendices-legacy-exceptions-goog-scope">9.4.4.2 Aliasing with <code>goog.scope</code></h5>
    
    <p><strong><code>goog.scope</code> is deprecated. New files should not use <code>goog.scope</code> even in
    projects with existing goog.scope usage.</strong></p>
    
    <p><code>goog.scope</code> may be used to shorten references to namespaced symbols in
    code using <code>goog.provide</code>/<code>goog.require</code> dependency management.</p>
    
    <p>Only one <code>goog.scope</code> invocation may be added per file. Always place it in
    the global scope.</p>
    
    <p>The opening <code>goog.scope(function() {</code> invocation must be preceded by exactly one
    blank line and follow any <code>goog.provide</code> statements, <code>goog.require</code> statements,
    or top-level comments. The invocation must be closed on the last line in the
    file. Append <code>// goog.scope</code> to the closing statement of the scope. Separate the
    comment from the semicolon by two spaces.</p>
    
    <p>Similar to C++ namespaces, do not indent under <code>goog.scope</code> declarations.
    Instead, continue from the 0 column.</p>
    
    <p>Only make aliases for names that will not be re-assigned to another object
    (e.g., most constructors, enums, and namespaces). Do not do this (see below for
    how to alias a constructor):</p>
    
    <pre class="language-js prettyprint badcode">goog.scope(function() {
    var Button = goog.ui.Button;
    
    Button = function() { ... };
    ...
    </pre>
    
    <p>Names must be the same as the last property of the global that they are aliasing.</p>
    
    <pre class="language-js prettyprint">goog.provide('my.module.SomeType');
    
    goog.require('goog.dom');
    goog.require('goog.ui.Button');
    
    goog.scope(function() {
    var Button = goog.ui.Button;
    var dom = goog.dom;
    
    // Alias new types after the constructor declaration.
    my.module.SomeType = function() { ... };
    var SomeType = my.module.SomeType;
    
    // Declare methods on the prototype as usual:
    SomeType.prototype.findButton = function() {
      // Button as aliased above.
      this.button = new Button(dom.getElement('my-button'));
    };
    ...
    });  // goog.scope
    </pre>
    
    </div>
    
    
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script></body></html>
`
}
module.exports = {
  getjscontent
}