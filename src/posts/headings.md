---
title: "Markup: HTML Tags and Formatting"
date: 2017-04-16
tags: []
categories: []
layout: post.njk
image: null
author: "CR"
---

## Headings

# Header one
## Header two
### Header three
#### Header four
##### Header five
###### Header six

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you&#8217;ve got to focus on. But that&#8217;s not what it means at all. It means saying no to the hundred other good ideas that there are. 
> You have to pick carefully. I&#8217;m actually as proud of the things we haven&#8217;t done as the things I have done. Innovation is saying no to 1,000 things.

<cite>Steve Jobs</cite> &#8211; Apple Worldwide Developers&#8217; Conference, 1997

## Tables

<table>
<thead>
<tr>
<th>Employee</th>
<th>Salary</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th><a href="http://example.org/">John Doe</a></th>
<td>$1</td>
<td>Because that&#8217;s all Steve Jobs needed for a salary.</td>
</tr>
<tr>
<th><a href="http://example.org/">Jane Doe</a></th>
<td>$100K</td>
<td>For all the blogging she does.</td>
</tr>
<tr>
<th><a href="http://example.org/">Fred Bloggs</a></th>
<td>$100M</td>
<td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
</tr>
<tr>
<th><a href="http://example.org/">Jane Bloggs</a></th>
<td>$100B</td>
<td>With hair like that?! Enough said&#8230;</td>
</tr>
</tbody>
</table>


## Definition Lists

<dl>
<dt>Definition List Title</dt>
<dd>Definition list division.</dd>
<dt>Startup</dt>
<dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
<dt>#dowork</dt>
<dd>Coined by Rob Dyrdek and his personal body guard Christopher &#8220;Big Black&#8221; Boykins, &#8220;Do Work&#8221; works as a self motivator, to motivating your friends.</dd>
<dt>Do It Live</dt>
<dd>I&#8217;ll let Bill O&#8217;Reilly will <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</dd>
</dl>

## Unordered Lists (Nested)

- List item one
  - List item one
    - List item one
    - List item two 
    - List item three
    - List item four
  - List item two
  - List item three
  - List item four
- List item two
- List item three
- List item four

## Ordered List (Nested)

1. List item one
    1. List item one
        1. List item one
        2. List item two
        3. List item three
         4. List item four
    1. List item two  
    2. List item three
    3. List item four
2. List item two
3. List item three
4. List item four

## HTML Tags

These supported tags come from the WordPress.com code <a title="Code" href="http://en.support.wordpress.com/code/">FAQ</a>.

<p><strong>Address Tag</strong></p>
<address>1 Infinite Loop<br/>
Cupertino, CA 95014<br/>
United States</address>
<p><strong>Anchor Tag (aka. Link)</strong></p>
<p>This is an example of a <a title="Apple" href="http://apple.com">link</a>.</p>
<p><strong>Abbreviation Tag</strong></p>
<p>The abbreviation <abbr title="Seriously">srsly</abbr> stands for &#8220;seriously&#8221;.</p>
<p><strong>Acronym Tag (<em>deprecated in HTML5</em>)</strong></p>
<p>The acronym <acronym title="For The Win">ftw</acronym> stands for &#8220;for the win&#8221;.</p>
<p><strong>Big Tag <strong>(<em>deprecated in HTML5</em>)</strong></strong></p>
<p>These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.</p>
<p><strong>Cite Tag</strong></p>
<p>&#8220;Code is poetry.&#8221; &#8212;<cite>Automattic</cite></p>
<p><strong>Code Tag</strong></p>
<p>You will learn later on in these tests that <code>word-wrap: break-word;</code> will be your best friend.</p>
<p><strong>Delete Tag</strong></p>
<p>This tag will let you <del>strikeout text</del>, but this tag is no longer supported in HTML5 (use the <code>&lt;strike&gt;</code> instead).</p>
<p><strong>Emphasize Tag</strong></p>
<p>The emphasize tag should <em>italicize</em> text.</p>
<p><strong>Insert Tag</strong></p>
<p>This tag should denote <ins>inserted</ins> text.</p>
<p><strong>Keyboard Tag</strong></p>
<p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
<p><strong>Preformatted Tag</strong></p>
<p>This tag styles large blocks of code.</p>
<pre>.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
	and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}</pre>
<p><strong>Quote Tag</strong></p>
<p><q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer</p>
<p><strong>Strike Tag <strong>(<em>deprecated in HTML5</em>)</strong></strong></p>
<p>This tag shows <span style="text-decoration: line-through">strike-through text</span></p>
<p><strong>Strong Tag</strong></p>
<p>This tag shows <strong>bold<strong> text.</strong></strong></p>
<p><strong>Subscript Tag</strong></p>
<p>Getting our science styling on with H<sub>2</sub>O, which should push the &#8220;2&#8221; down.</p>
<p><strong>Superscript Tag</strong></p>
<p>Still sticking with science and Isaac Newton&#8217;s E = MC<sup>2</sup>, which should lift the 2 up.</p>
<p><strong>Teletype Tag <strong>(<em>deprecated in HTML5</em>)</strong></strong></p>
<p>This rarely used tag emulates <tt>teletype text</tt>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
<p><strong>Variable Tag</strong></p>
<p>This allows you to denote <var>variables</var>.</p>