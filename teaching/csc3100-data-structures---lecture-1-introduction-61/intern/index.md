# CSC3100 Data Structures - 2026 Summer - Lecture 1 Introduction 6/1




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSC3100 Data Structures - Lecture 1 Introduction</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" id="lightbox-close">&times;</button>
            <img id="lightbox-img" src="" alt="PPT Slide">
            <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
    </div>

​    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <img src="ppt_images/page_01.png" alt="CUHK" class="nav-logo-img" id="nav-logo-thumb">
                <span>{CSC3100}</span>
            </div>
            <ul class="nav-links">
                <li><a href="#hero" class="nav-link active">Home</a></li>
                <li><a href="#why" class="nav-link">Why?</a></li>
                <li><a href="#examples" class="nav-link">Examples</a></li>
                <li><a href="#adt" class="nav-link">ADT</a></li>
                <li><a href="#topics" class="nav-link">Topics</a></li>
                <li><a href="#plan" class="nav-link">Plan</a></li>
                <li><a href="#kth" class="nav-link">Kth</a></li>
                <li><a href="#math" class="nav-link">Math</a></li>
                <li><a href="#proof" class="nav-link">Proof</a></li>
                <li><a href="#quiz" class="nav-link">Quiz</a></li>
            </ul>
            <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
        </div>
    </nav>

​    <!-- Hero -->
    <section id="hero" class="hero">
        <canvas id="hero-canvas"></canvas>
        <div class="hero-content">
            <div class="hero-ppt" data-slide="1">
                <img src="ppt_images/page_01.png" alt="Lecture 1 Cover" class="ppt-img hero-main-img">
                <div class="ppt-zoom-hint">Click to enlarge</div>
            </div>
            <a href="#outline" class="hero-cta"><span>Explore the Lecture</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
        </div>
        <div class="scroll-indicator">
            <div class="mouse"><div class="wheel"></div></div>
            <span>Scroll to explore</span>
        </div>
    </section>

​    <!-- Outline -->
    <section id="outline" class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Outline</span>
                <h2 class="section-title">What We Will Cover Today</h2>
            </div>
            <div class="ppt-showcase">
                <div class="ppt-card large" data-slide="2">
                    <img src="ppt_images/page_02.png" alt="Outline" class="ppt-img">
                    <div class="ppt-zoom-hint"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg></div>
                </div>
                <div class="ppt-sidebar">
                    <div class="outline-checklist">
                        <div class="check-item"><span class="check-num">01</span><span>Why take this course?</span></div>
                        <div class="check-item"><span class="check-num">02</span><span>Basic concepts: Abstract Data Type (ADT)</span></div>
                        <div class="check-item"><span class="check-num">03</span><span>Relationship of ADT, DS, and Algorithms</span></div>
                        <div class="check-item"><span class="check-num">04</span><span>Topics in this course</span></div>
                        <div class="check-item"><span class="check-num">05</span><span>Tentative teaching plan</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

​    <!-- Why Take This Course -->
    <section id="why" class="section alt-bg">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Motivation</span>
                <h2 class="section-title">Why Take This Course?</h2>
            </div>
            <div class="ppt-showcase reverse">
                <div class="ppt-sidebar">
                    <div class="info-cards">
                        <div class="info-card">
                            <div class="info-icon">🎯</div>
                            <h4>Required & Fundamental</h4>
                            <p>A core course in computer science. Very important and very useful.</p>
                        </div>
                        <div class="info-card">
                            <div class="info-icon">💾</div>
                            <h4>Data + Algorithms</h4>
                            <p>Learn to <strong>save</strong> data (data structures) and <strong>manipulate</strong> data (algorithms) effectively and efficiently.</p>
                        </div>
                        <div class="info-card">
                            <div class="info-icon">⚖️</div>
                            <h4>No One-Size-Fits-All</h4>
                            <p>Array: good for search, bad for updates. List: good for updates, bad for search.</p>
                        </div>
                        <div class="info-card">
                            <div class="info-icon">🚀</div>
                            <h4>Real-World Impact</h4>
                            <p>ID validation, route planning, Google search — all powered by data structures.</p>
                        </div>
                    </div>
                </div>
                <div class="ppt-card large" data-slide="3">
                    <img src="ppt_images/page_03.png" alt="Why take this course" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
            </div>
        </div>
    </section>

​    <!-- Real Examples -->
    <section id="examples" class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Real Examples</span>
                <h2 class="section-title">How Useful in Practice?</h2>
            </div>

​            <!-- Route Planning -->
            <div class="example-block">
                <div class="example-header">
                    <span class="example-badge">Example 1</span>
                    <h3>Route Planning</h3>
                </div>
                <div class="ppt-showcase">
                    <div class="ppt-card" data-slide="4">
                        <img src="ppt_images/page_04.png" alt="Route Planning" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="interactive-demo">
                            <h4>🗺️ Interactive Shortest Path</h4>
                            <p>Find the shortest path between two locations in a road network.</p>
                            <canvas id="route-canvas" width="500" height="280"></canvas>
                            <div class="demo-controls">
                                <button id="route-reset" class="btn-secondary">Reset Network</button>
                                <button id="route-find" class="btn-primary">Find Shortest Path</button>
                            </div>
                            <div class="demo-note">
                                <strong>Input:</strong> Road network, source, destination<br>
                                <strong>Output:</strong> Path with shortest total distance
                            </div>
                        </div>
                    </div>
                </div>
            </div>

​            <!-- Google Search -->
            <div class="example-block">
                <div class="example-header">
                    <span class="example-badge">Example 2</span>
                    <h3>Google Search</h3>
                </div>
                <div class="ppt-showcase reverse">
                    <div class="ppt-sidebar">
                        <div class="interactive-demo">
                            <h4>🔍 Search Engine Indexing</h4>
                            <p>Google processes <strong>30 trillion (30×10¹²)</strong> webpages using sophisticated index structures.</p>
                            <div class="search-sim">
                                <div class="search-bar-mini">
                                    <input type="text" value="data structure" readonly>
                                    <span>🔍</span>
                                </div>
                                <div class="search-result-bar">
                                    <div class="result-fill" id="search-fill"></div>
                                </div>
                                <div class="search-stat" id="search-stat">Indexing...</div>
                            </div>
                            <button class="btn-primary" id="search-run">Run Indexing Simulation</button>
                            <div class="demo-note">
                                An <strong>inverted index</strong> is just a data structure — mapping keywords to documents.
                            </div>
                        </div>
                    </div>
                    <div class="ppt-card" data-slide="5">
                        <img src="ppt_images/page_05.png" alt="Google Search" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                </div>
            </div>
​        </div>
​    </section>
​    
​    <!-- Course Goal -->
    <section class="section alt-bg">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Goal</span>
                <h2 class="section-title">One Sentence About This Course</h2>
            </div>
            <div class="ppt-showcase">
                <div class="ppt-card large" data-slide="6">
                    <img src="ppt_images/page_06.png" alt="Course Goal" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
                <div class="ppt-sidebar">
                    <div class="goal-interactive">
                        <div class="goal-word" id="goal-correct">correctly</div>
                        <div class="goal-arrow">↙</div>
                        <div class="goal-skill">Logical thinking and math</div>
                        <div class="goal-word" id="goal-efficient">efficiently</div>
                        <div class="goal-arrow">↙</div>
                        <div class="goal-skill">Good at data structures, algorithms, and programming</div>
                    </div>
                    <p class="goal-summary">This course is about how to use computing resources and tools to solve practical problems <strong>correctly</strong> and <strong>efficiently</strong>.</p>
                </div>
            </div>
        </div>
    </section>

​    <!-- Data Abstraction / ADT -->
    <section id="adt" class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Core Concept</span>
                <h2 class="section-title">Abstract Data Type (ADT)</h2>
            </div>

​            <!-- Data Abstraction -->
            <div class="example-block">
                <div class="example-header">
                    <span class="example-badge">Concept 1</span>
                    <h3>Data Abstraction — The Smartphone Analogy</h3>
                </div>
                <div class="ppt-showcase">
                    <div class="ppt-card" data-slide="7">
                        <img src="ppt_images/page_07.png" alt="Data Abstraction" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="phone-analogy">
                            <div class="phone-screen-sim">
                                <div class="phone-apps">
                                    <div class="phone-app" data-app="call"><span>📞</span><small>Call</small></div>
                                    <div class="phone-app" data-app="internet"><span>🌐</span><small>Internet</small></div>
                                    <div class="phone-app" data-app="storage"><span>💾</span><small>Storage</small></div>
                                </div>
                                <div class="phone-detail" id="phone-detail">Tap an app to see abstraction vs implementation!</div>
                            </div>
                            <div class="abstraction-box" id="abstraction-box">
                                <div class="abs-layer">
                                    <span class="abs-label">What users know (Interface)</span>
                                    <p id="abs-interface">To make a call: input a person's phone number</p>
                                </div>
                                <div class="abs-divider">▼ Hidden Implementation ▼</div>
                                <div class="abs-layer hidden">
                                    <span class="abs-label">What users DON'T know (Implementation)</span>
                                    <p id="abs-implementation">CPU, memory, battery, signal processing, base station negotiation...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

​            <!-- ADT Benefits -->
            <div class="example-block">
                <div class="example-header">
                    <span class="example-badge">Concept 2</span>
                    <h3>Benefits of ADT</h3>
                </div>
                <div class="ppt-showcase reverse">
                    <div class="ppt-sidebar">
                        <div class="benefit-cards">
                            <div class="benefit-card" id="ben-user">
                                <span class="ben-icon">👤</span>
                                <h4>User-friendly</h4>
                                <p>Users don't need to know how to connect to the Internet.</p>
                            </div>
                            <div class="benefit-card" id="ben-designer">
                                <span class="ben-icon">🔧</span>
                                <h4>Designer-friendly</h4>
                                <p>Designers can change mechanisms without affecting users.</p>
                            </div>
                            <div class="benefit-card" id="ben-protect">
                                <span class="ben-icon">🔒</span>
                                <h4>Protection</h4>
                                <p>Others cannot know your secrets! Information hiding enforced.</p>
                            </div>
                        </div>
                        <button class="btn-primary" id="animate-benefits">Animate Benefits</button>
                    </div>
                    <div class="ppt-card" data-slide="8">
                        <img src="ppt_images/page_08.png" alt="ADT Benefits" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                </div>
            </div>

​            <!-- How to Separate -->
            <div class="example-block">
                <div class="example-header">
                    <span class="example-badge">Concept 3</span>
                    <h3>How to Separate? — IntegerSet ADT</h3>
                </div>
                <div class="ppt-showcase">
                    <div class="ppt-card" data-slide="9">
                        <img src="ppt_images/page_09.png" alt="How to separate" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="adt-playground">
                            <div class="code-panel">
                                <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-title">IntegerSet ADT</span></div>
                                <pre class="code-block"><code><span class="kw">ADT</span> <span class="type">IntegerSet</span> {
    <span class="type">IntegerSet</span> <span class="fn">createEmptySet</span>();
    <span class="type">IntegerSet</span> <span class="fn">addElementToSet</span>(<span class="type">integer</span>, SetA);
    <span class="type">Boolean</span>    <span class="fn">search</span>(<span class="type">integer</span>, SetA);
    <span class="type">IntegerSet</span> <span class="fn">intersection</span>(setA, setB);
    <span class="type">IntegerSet</span> <span class="fn">union</span>(setA, setB);
    <span class="type">IntegerSet</span> <span class="fn">difference</span>(setA, setB);
}</code></pre>
                            </div>
                            <div class="impl-tabs">
                                <button class="impl-tab active" data-impl="array">Array</button>
                                <button class="impl-tab" data-impl="list">Linked List</button>
                                <button class="impl-tab" data-impl="tree">Red-Black Tree</button>
                                <button class="impl-tab" data-impl="hash">Hash Table</button>
                            </div>
                            <div class="impl-view" id="impl-view">
                                <div class="impl-content active" id="impl-array"><div class="vis-array"></div><p>Search: O(n) | Insert: O(n)</p></div>
                                <div class="impl-content" id="impl-list"><div class="vis-list"></div><p>Search: O(n) | Insert: O(1)</p></div>
                                <div class="impl-content" id="impl-tree"><div class="vis-tree"></div><p>Search: O(log n) | Insert: O(log n)</p></div>
                                <div class="impl-content" id="impl-hash"><div class="vis-hash"></div><p>Search: O(1) avg | Insert: O(1) avg</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
​        </div>
​    </section>


​    <!-- Relationships -->
    <section class="section alt-bg">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Relationships</span>
                <h2 class="section-title">ADT, Data Structures & Algorithms</h2>
            </div>
            <div class="ppt-showcase reverse">
                <div class="ppt-sidebar">
                    <div class="relation-flow">
                        <div class="rel-box">
                            <div class="rel-title">Abstract Data Type</div>
                            <div class="rel-desc">Defines operations (what)</div>
                        </div>
                        <div class="rel-arrow-down">↓</div>
                        <div class="rel-box">
                            <div class="rel-title">Data Structure</div>
                            <div class="rel-desc">Implementation (how to store)</div>
                        </div>
                        <div class="rel-arrow-down">↓</div>
                        <div class="rel-box">
                            <div class="rel-title">Algorithm</div>
                            <div class="rel-desc">Implementation of operations (how to process)</div>
                        </div>
                    </div>
                    <div class="sorting-interactive">
                        <h4>🎨 Interactive Sorting Visualizer</h4>
                        <canvas id="sort-canvas" width="520" height="220"></canvas>
                        <div class="sort-controls">
                            <button class="btn-sort" data-algo="bubble">Bubble</button>
                            <button class="btn-sort" data-algo="selection">Selection</button>
                            <button class="btn-sort" data-algo="insertion">Insertion</button>
                            <button class="btn-sort" data-algo="quick">Quick</button>
                            <button class="btn-sort" data-algo="merge">Merge</button>
                        </div>
                        <div class="sort-stats">
                            <span>Comparisons: <strong id="sort-comp">0</strong></span>
                            <span>Swaps: <strong id="sort-swap">0</strong></span>
                            <span>Complexity: <strong id="sort-complexity">—</strong></span>
                        </div>
                    </div>
                </div>
                <div class="ppt-card large" data-slide="10">
                    <img src="ppt_images/page_10.png" alt="Relationships" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
            </div>
        </div>
    </section>

​    <!-- Topics / Common ADTs -->
    <section id="topics" class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Topics</span>
                <h2 class="section-title">Common ADTs & Topics Covered</h2>
            </div>
            <div class="ppt-showcase">
                <div class="ppt-card large" data-slide="11">
                    <img src="ppt_images/page_11.png" alt="Common ADTs" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
                <div class="ppt-sidebar">
                    <div class="topics-flip">
                        <div class="flip-card"><div class="flip-inner"><div class="flip-front"><span class="flip-icon">📊</span><h4>Array</h4><p>Contiguous memory</p></div><div class="flip-back"><h4>Array</h4><p>Random access O(1)<br>Fixed size<br>Cache-friendly</p></div></div></div>
                        <div class="flip-card"><div class="flip-inner"><div class="flip-front"><span class="flip-icon">🔗</span><h4>List</h4><p>Linked storage</p></div><div class="flip-back"><h4>List</h4><p>Dynamic size<br>Efficient insertion<br>Sequential access</p></div></div></div>
                        <div class="flip-card"><div class="flip-inner"><div class="flip-front"><span class="flip-icon">📚</span><h4>Stack</h4><p>LIFO</p></div><div class="flip-back"><h4>Stack</h4><p>Push/Pop O(1)<br>Expression eval<br>Backtracking</p></div></div></div>
                        <div class="flip-card"><div class="flip-inner"><div class="flip-front"><span class="flip-icon">🎢</span><h4>Queue</h4><p>FIFO</p></div><div class="flip-back"><h4>Queue</h4><p>Enqueue/Dequeue O(1)<br>BFS traversal<br>Task scheduling</p></div></div></div>
                        <div class="flip-card"><div class="flip-inner"><div class="flip-front"><span class="flip-icon">🌲</span><h4>Tree</h4><p>Hierarchical</p></div><div class="flip-back"><h4>Tree</h4><p>BST, AVL, R-B Tree<br>Heap<br>Range queries</p></div></div></div>
                        <div class="flip-card"><div class="flip-inner"><div class="flip-front"><span class="flip-icon">🕸️</span><h4>Graph</h4><p>Network</p></div><div class="flip-back"><h4>Graph</h4><p>BFS & DFS<br>Shortest path<br>MST</p></div></div></div>
                    </div>
                </div>
            </div>

​            <!-- Topics Covered (page 12) -->
            <div class="ppt-showcase alt-mt">
                <div class="ppt-sidebar">
                    <div class="efficiency-panel">
                        <h4>Efficiency Comparison</h4>
                        <div class="eff-table-wrapper">
                            <table class="eff-table">
                                <thead><tr><th>Structure</th><th>Search</th><th>Insert</th><th>Best For</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Array</strong></td><td><span class="tag mid">O(n)</span></td><td><span class="tag bad">O(n)</span></td><td>Indexing</td></tr>
                                    <tr><td><strong>List</strong></td><td><span class="tag mid">O(n)</span></td><td><span class="tag good">O(1)</span></td><td>Updates</td></tr>
                                    <tr><td><strong>BST</strong></td><td><span class="tag good">O(log n)</span></td><td><span class="tag good">O(log n)</span></td><td>Sorted data</td></tr>
                                    <tr><td><strong>Hash Table</strong></td><td><span class="tag good">O(1)</span></td><td><span class="tag good">O(1)</span></td><td>Fast lookup</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="complexity-canvas-wrap">
                            <canvas id="complexity-chart" width="500" height="280"></canvas>
                        </div>
                    </div>
                </div>
                <div class="ppt-card large" data-slide="12">
                    <img src="ppt_images/page_12.png" alt="Topics Covered" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
            </div>
​        </div>
​    </section>
​    
​    <!-- Teaching Plan -->
    <section id="plan" class="section alt-bg">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Schedule</span>
                <h2 class="section-title">Tentative Teaching Plan</h2>
            </div>
            <div class="ppt-showcase">
                <div class="ppt-card large" data-slide="13">
                    <img src="ppt_images/page_13.png" alt="Teaching Plan" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
                <div class="ppt-sidebar">
                    <div class="timeline-interactive">
                        <div class="timeline-line-v"></div>
                        <div class="t-item" data-w="1"><div class="t-dot"></div><div class="t-card"><span class="t-week">W1</span><span>Course overview, Java basics</span></div></div>
                        <div class="t-item" data-w="2"><div class="t-dot"></div><div class="t-card"><span class="t-week">W2</span><span>Arrays, insertion/merge sort</span></div></div>
                        <div class="t-item" data-w="3"><div class="t-dot"></div><div class="t-card"><span class="t-week">W3</span><span>Time complexity</span></div></div>
                        <div class="t-item" data-w="4"><div class="t-dot"></div><div class="t-card"><span class="t-week">W4</span><span>List</span></div></div>
                        <div class="t-item" data-w="5"><div class="t-dot"></div><div class="t-card"><span class="t-week">W5</span><span>Stack, queues</span></div></div>
                        <div class="t-item" data-w="6"><div class="t-dot"></div><div class="t-card"><span class="t-week">W6</span><span>More sorting algorithms</span></div></div>
                        <div class="t-item" data-w="7"><div class="t-dot"></div><div class="t-card"><span class="t-week">W7</span><span>Trees</span></div></div>
                        <div class="t-item" data-w="8"><div class="t-dot exam"></div><div class="t-card exam"><span class="t-week">W8</span><span>📝 Midterm Exam</span></div></div>
                        <div class="t-item" data-w="9"><div class="t-dot"></div><div class="t-card"><span class="t-week">W9</span><span>Trees</span></div></div>
                        <div class="t-item" data-w="10"><div class="t-dot"></div><div class="t-card"><span class="t-week">W10</span><span>Hashing</span></div></div>
                        <div class="t-item" data-w="11"><div class="t-dot"></div><div class="t-card"><span class="t-week">W11</span><span>Graphs</span></div></div>
                        <div class="t-item" data-w="12"><div class="t-dot"></div><div class="t-card"><span class="t-week">W12</span><span>Graphs</span></div></div>
                        <div class="t-item" data-w="13"><div class="t-dot"></div><div class="t-card"><span class="t-week">W13</span><span>Graphs, other DS</span></div></div>
                        <div class="t-item" data-w="14"><div class="t-dot"></div><div class="t-card"><span class="t-week">W14</span><span>Course review</span></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

​    <!-- Kth Largest Problem -->
    <section id="kth" class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Case Study</span>
                <h2 class="section-title">Example: Selection Problem</h2>
            </div>

​            <!-- Page 14 -->
            <div class="example-block">
                <div class="ppt-showcase">
                    <div class="ppt-card large" data-slide="14">
                        <img src="ppt_images/page_14.png" alt="Selection Problem" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="kth-sim">
                            <h4>⚡ Interactive Simulator</h4>
                            <p>Compare two solutions for finding the kth largest element.</p>
                            <div class="sim-inputs">
                                <label>N: <input type="range" id="sim-n" min="10" max="1000" value="100"><span id="sim-n-val">100</span></label>
                                <label>k: <input type="range" id="sim-k" min="1" max="99" value="10"><span id="sim-k-val">10</span></label>
                            </div>
                            <button id="sim-run" class="btn-primary">Run Simulation</button>
                            <canvas id="kth-canvas" width="460" height="180"></canvas>
                            <div class="sim-legend">
                                <span class="leg-s1">Solution 1: O(N log N)</span>
                                <span class="leg-s2">Solution 2: O(N × k)</span>
                            </div>
                            <div class="sim-insight" id="sim-insight">Adjust N and k, then click Run!</div>
                        </div>
                    </div>
                </div>
            </div>

​            <!-- Page 15 -->
            <div class="example-block">
                <div class="ppt-showcase reverse">
                    <div class="ppt-sidebar">
                        <div class="question-cards">
                            <div class="q-card">
                                <h4>❓ Which solution is better?</h4>
                                <p>By simulation or by theoretical analysis?</p>
                            </div>
                            <div class="q-card">
                                <h4>❓ Is either good enough?</h4>
                                <p>With N=1,000,000 and k=500,000, <strong>neither</strong> finishes in reasonable time!</p>
                            </div>
                            <div class="q-card highlight">
                                <h4>💡 Conclusion</h4>
                                <p>Writing a working program is <strong>not good enough</strong>! We need the optimum solution.</p>
                            </div>
                        </div>
                    </div>
                    <div class="ppt-card large" data-slide="15">
                        <img src="ppt_images/page_15.png" alt="Questions and Conclusion" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                </div>
            </div>

​            <!-- Page 16 -->
            <div class="example-block">
                <div class="ppt-showcase">
                    <div class="ppt-card" data-slide="16">
                        <img src="ppt_images/page_16.png" alt="Exercise" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="hint-box">
                            <h4>🧠 Think About It</h4>
                            <p>Is it possible to find a better algorithm to select the k<sup>th</sup> largest number?</p>
                            <div class="hint-reveal" id="hint-reveal">
                                <button class="btn-secondary" id="show-hint">Show Hint</button>
                                <p class="hint-text" id="hint-text" style="display:none;">Yes! <strong>QuickSelect</strong> achieves O(N) average time using partition similar to QuickSort!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
​        </div>
​    </section>


​    <!-- Math Review -->
    <section id="math" class="section alt-bg">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Foundation</span>
                <h2 class="section-title">Mathematics Review</h2>
            </div>

​            <!-- Exponents (page 17) -->
            <div class="example-block">
                <div class="example-header"><span class="example-badge">Math 1</span><h3>Exponents</h3></div>
                <div class="ppt-showcase">
                    <div class="ppt-card" data-slide="17">
                        <img src="ppt_images/page_17.png" alt="Exponents" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="calc-panel">
                            <h4>🧮 Exponent Calculator</h4>
                            <div class="calc-row"><span>X<sup>A</sup> × X<sup>B</sup> = X<sup>A+B</sup></span></div>
                            <div class="calc-row interactive">
                                <input type="number" id="e-base" value="2" min="2">^<input type="number" id="e-a" value="3" min="0"> × <input type="number" id="e-base2" value="2" min="2">^<input type="number" id="e-b" value="4" min="0"> = <span class="calc-result" id="e-r1">128</span>
                            </div>
                            <div class="calc-row"><span>(X<sup>A</sup>)<sup>B</sup> = X<sup>AB</sup></span></div>
                            <div class="calc-row interactive">
                                (<input type="number" id="e-p-base" value="2" min="2">^<input type="number" id="e-p-a" value="3" min="0">)^<input type="number" id="e-p-b" value="2" min="0"> = <span class="calc-result" id="e-r2">64</span>
                            </div>
                            <div class="calc-row"><span>2<sup>N</sup> + 2<sup>N</sup> = 2<sup>N+1</sup></span></div>
                            <div class="calc-row interactive">
                                2^<input type="number" id="e-n" value="5" min="0"> + 2^<input type="number" id="e-n2" value="5" min="0" disabled> = <span class="calc-result" id="e-r3">64</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

​            <!-- Logarithms (page 18) -->
            <div class="example-block">
                <div class="example-header"><span class="example-badge">Math 2</span><h3>Logarithms</h3></div>
                <div class="ppt-showcase reverse">
                    <div class="ppt-sidebar">
                        <div class="calc-panel">
                            <h4>🧮 Log Calculator (base 2)</h4>
                            <div class="calc-row"><span>log<sub>2</sub> A = ?</span></div>
                            <div class="calc-row interactive">
                                log₂ <input type="number" id="log-in" value="64" min="1"> = <span class="calc-result" id="log-r">6</span>
                            </div>
                            <div class="calc-row"><span>log(AB) = log A + log B</span></div>
                            <div class="calc-row interactive">
                                log₂(<input type="number" id="log-m1" value="4" min="1"> × <input type="number" id="log-m2" value="8" min="1">) = <span class="calc-result" id="log-r2">5</span>
                            </div>
                            <div class="calc-row"><span>log(A/B) = log A - log B</span></div>
                            <div class="calc-row interactive">
                                log₂(<input type="number" id="log-d1" value="64" min="1"> / <input type="number" id="log-d2" value="8" min="1">) = <span class="calc-result" id="log-r3">3</span>
                            </div>
                            <div class="calc-facts">
                                <span class="fact-tag">log 1 = 0</span>
                                <span class="fact-tag">log 2 = 1</span>
                                <span class="fact-tag">log 1024 = 10</span>
                                <span class="fact-tag">log 65536 = 16</span>
                            </div>
                        </div>
                    </div>
                    <div class="ppt-card" data-slide="18">
                        <img src="ppt_images/page_18.png" alt="Logarithms" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                </div>
            </div>

​            <!-- Arithmetic Series (page 19) -->
            <div class="example-block">
                <div class="example-header"><span class="example-badge">Math 3</span><h3>Arithmetic Series</h3></div>
                <div class="ppt-showcase">
                    <div class="ppt-card" data-slide="19">
                        <img src="ppt_images/page_19.png" alt="Arithmetic Series" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                    <div class="ppt-sidebar">
                        <div class="calc-panel">
                            <h4>🧮 Series Calculator</h4>
                            <div class="series-formula">Σ<sub>i=1</sub><sup>N</sup> i = N(N+1)/2</div>
                            <div class="calc-row interactive">
                                N = <input type="number" id="arith-n" value="100" min="1">
                                <button id="arith-calc" class="btn-mini">Calculate</button>
                                <span class="calc-result" id="arith-r">5050</span>
                            </div>
                            <div class="series-formula">Σ i² = N(N+1)(2N+1)/6</div>
                            <div class="calc-row interactive">
                                N = <input type="number" id="arith-n2" value="10" min="1">
                                <button id="arith-calc2" class="btn-mini">Calculate</button>
                                <span class="calc-result" id="arith-r2">385</span>
                            </div>
                            <div class="example-box">
                                <strong>Example:</strong> 2+5+8+...+(3k-1) = 3k(k+1)/2 - k
                            </div>
                        </div>
                    </div>
                </div>
            </div>

​            <!-- Geometric Series (page 20) -->
            <div class="example-block">
                <div class="example-header"><span class="example-badge">Math 4</span><h3>Geometric Series</h3></div>
                <div class="ppt-showcase reverse">
                    <div class="ppt-sidebar">
                        <div class="calc-panel">
                            <h4>🧮 Geometric Series</h4>
                            <div class="series-formula">S = 1 + r + r² + ... = 1/(1-r) &nbsp; (0&lt;r&lt;1)</div>
                            <div class="calc-row interactive">
                                r = <input type="number" id="geo-r" value="0.5" min="0.01" max="0.99" step="0.01">
                                <button id="geo-calc" class="btn-mini">Calculate</button>
                                <span class="calc-result" id="geo-rslt">2</span>
                            </div>
                            <div class="derivation-box">
                                <h5>📐 Derivation</h5>
                                <p>Let S = 1 + r + r² + ... (1)</p>
                                <p>Then rS = r + r² + r³ + ... (2)</p>
                                <p>(1) - (2): S - rS = 1</p>
                                <p><strong>S = 1/(1-r)</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="ppt-card" data-slide="20">
                        <img src="ppt_images/page_20.png" alt="Geometric Series" class="ppt-img">
                        <div class="ppt-zoom-hint">Click to enlarge</div>
                    </div>
                </div>
            </div>
​        </div>
​    </section>
​    
​    <!-- Proof Techniques -->
    <section id="proof" class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Logic</span>
                <h2 class="section-title">Proof Techniques</h2>
            </div>
            <div class="ppt-showcase">
                <div class="ppt-card large" data-slide="21">
                    <img src="ppt_images/page_21.png" alt="Proof Techniques" class="ppt-img">
                    <div class="ppt-zoom-hint">Click to enlarge</div>
                </div>
                <div class="ppt-sidebar">
                    <div class="proof-tabs">
                        <button class="proof-tab active" data-proof="counter">Counterexample</button>
                        <button class="proof-tab" data-proof="induction">Induction</button>
                        <button class="proof-tab" data-proof="contradiction">Contradiction</button>
                    </div>
                    <div class="proof-content active" id="proof-counter">
                        <h4>❌ Proof by Counterexample</h4>
                        <p>To disprove: find one concrete example that violates the statement.</p>
                        <div class="fib-demo">
                            <p>Claim: F<sub>k</sub> ≤ k²</p>
                            <div class="fib-bars" id="fib-bars"></div>
                            <p class="fib-highlight">F<sub>11</sub> = 144 > 11² = 121 ✗</p>
                        </div>
                    </div>
                    <div class="proof-content" id="proof-induction">
                        <h4>🔁 Proof by Induction</h4>
                        <div class="ind-steps">
                            <div class="ind-step"><span class="ind-num">1</span><p><strong>Base Case:</strong> Prove for n=1</p></div>
                            <div class="ind-step"><span class="ind-num">2</span><p><strong>Hypothesis:</strong> Assume true for n=k</p></div>
                            <div class="ind-step"><span class="ind-num">3</span><p><strong>Inductive Step:</strong> Prove for n=k+1</p></div>
                        </div>
                        <button class="btn-secondary" id="ind-run">Prove Σi = n(n+1)/2</button>
                        <div class="ind-state" id="ind-state">Click to start the proof...</div>
                    </div>
                    <div class="proof-content" id="proof-contradiction">
                        <h4>🔄 Proof by Contradiction</h4>
                        <div class="contra-flow" id="contra-flow">
                            <div class="c-step">Assume √2 = p/q (reduced)</div>
                            <div class="c-step">2 = p²/q² → p² = 2q²</div>
                            <div class="c-step">p² even → p even</div>
                            <div class="c-step">p=2k → 4k² = 2q² → q² = 2k²</div>
                            <div class="c-step">q is also even!</div>
                            <div class="c-step contra">Contradiction!</div>
                        </div>
                        <button class="btn-secondary" id="contra-run">Animate Proof</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

​    <!-- Quiz -->
    <section id="quiz" class="section alt-bg">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Quiz</span>
                <h2 class="section-title">Knowledge Check</h2>
            </div>
            <div class="quiz-wrapper">
                <div class="quiz-progress"><div class="quiz-bar" id="quiz-bar"></div></div>
                <div class="quiz-info">Question <span id="q-cur">1</span> / <span id="q-tot">5</span></div>

                <div class="quiz-slide active" data-q="1">
                    <h3>What is the primary purpose of an ADT?</h3>
                    <div class="quiz-options">
                        <button class="q-opt" data-c="f">To make programs run faster</button>
                        <button class="q-opt" data-c="t">To separate abstract properties from implementation details</button>
                        <button class="q-opt" data-c="f">To reduce memory usage</button>
                        <button class="q-opt" data-c="f">To replace all data structures</button>
                    </div>
                    <div class="q-feedback"></div>
                </div>
                <div class="quiz-slide" data-q="2">
                    <h3>Which data structure offers O(1) average search time?</h3>
                    <div class="quiz-options">
                        <button class="q-opt" data-c="f">Array (unsorted)</button>
                        <button class="q-opt" data-c="f">Linked List</button>
                        <button class="q-opt" data-c="t">Hash Table</button>
                        <button class="q-opt" data-c="f">Binary Search Tree (unbalanced)</button>
                    </div>
                    <div class="q-feedback"></div>
                </div>
                <div class="quiz-slide" data-q="3">
                    <h3>Time complexity of Solution 1 (sort all) for Kth largest?</h3>
                    <div class="quiz-options">
                        <button class="q-opt" data-c="f">O(N)</button>
                        <button class="q-opt" data-c="t">O(N log N)</button>
                        <button class="q-opt" data-c="f">O(N²)</button>
                        <button class="q-opt" data-c="f">O(k log N)</button>
                    </div>
                    <div class="q-feedback"></div>
                </div>
                <div class="quiz-slide" data-q="4">
                    <h3>What does log₂ 64 equal?</h3>
                    <div class="quiz-options">
                        <button class="q-opt" data-c="f">4</button>
                        <button class="q-opt" data-c="f">5</button>
                        <button class="q-opt" data-c="t">6</button>
                        <button class="q-opt" data-c="f">8</button>
                    </div>
                    <div class="q-feedback"></div>
                </div>
                <div class="quiz-slide" data-q="5">
                    <h3>Which proof assumes false and derives contradiction?</h3>
                    <div class="quiz-options">
                        <button class="q-opt" data-c="f">Proof by counterexample</button>
                        <button class="q-opt" data-c="f">Proof by induction</button>
                        <button class="q-opt" data-c="t">Proof by contradiction</button>
                        <button class="q-opt" data-c="f">Direct proof</button>
                    </div>
                    <div class="q-feedback"></div>
                </div>

                <div class="quiz-nav">
                    <button id="q-prev" class="btn-secondary" disabled>Previous</button>
                    <button id="q-next" class="btn-primary" disabled>Next</button>
                </div>
                <div class="quiz-result-panel" id="quiz-result-panel">
                    <div class="result-inner">
                        <h3>🎉 Quiz Complete!</h3>
                        <div class="score-display"><span id="score-num">0</span><span class="score-total">/5</span></div>
                        <p id="score-msg">Great job!</p>
                        <button class="btn-primary" id="q-restart">Restart Quiz</button>
                    </div>
                </div>
​            </div>
​        </div>
​    </section>
​    
​    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <img src="ppt_images/page_01.png" alt="CUHK" class="footer-logo">
                    <div>
                        <strong>CSC3100 Data Structures</strong>
                        <p>Lecture 1: Introduction</p>
                    </div>
                </div>
                <div class="footer-meta">
                    <p>Juexiao Zhou</p>
                    <p>School of Data Science, CUHK-Shenzhen</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

