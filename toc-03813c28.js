// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">wiki.ashish.me</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="clean-code/index.html">Clean Code</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="clean-code/conventional-commits.html">Conventional Commits</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/index.html">Data Structures</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/array.html">Array</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/graph.html">Graph</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/hash-table.html">Hash Table</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/linked-list.html">Linked List</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/queue.html">Queue</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/stack.html">Stack</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/time-complexity.html">Time Complexity</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="data-structures/tree.html">Tree</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docker/index.html">Docker</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docker/architecture.html">Docker</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docker/cheatsheet.html">Cheatsheet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docker/container.html">Container</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="git/index.html">Git</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="git/cherrypick.html">Cherrypicking</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="git/commands.html">Git Commands</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="git/rebase.html">Rebase</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="git/squash.html">Squashing</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/index.html">Javascript</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/index.html">Core Concepts</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/Closure.html">Closure</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/async-await.html">Async Await</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/babel.html">Babel</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/callback-hell.html">Callback Hell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/es5.html">ES 5</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/es6.html">ES 6</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/exports-imports.html">Exports Inports</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/generator.html">Generators</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/hoisting.html">Hoisting</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/prototypes-and-classes.html">Prototypes and classes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/core-concepts/webpack.html">Webpack</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/index.html">Design Patterns</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/adapter-pattern.html">Adapter Pattern</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/builder-pattern.html">Builder Pattern</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/decorator-pattern.html">Decorator Pattern</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/factory.html">Factory Pattern</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/proxy-pattern.html">Proxy Pattern</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="javascript/design-patterns/singleton-pattern.html">Singleton Design Pattern</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kafka/index.html">Kafka</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kafka/topic.html">Topic</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="leetcode/index.html">Leetcode</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="leetcode/dp/index.html">Dp</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="leetcode/dp/best-time-to-buy-stock.html">Best Time to Buy and Sell Stock</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/index.html">Personal</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/apps/index.html">Apps</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/apps/iphone-ireland.html">List of iPhone apps (Ireland)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/cli.html">CLI</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/info.html">Common Info</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/setup/index.html">Setup</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/setup/macbook.html">Macbook Setup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/setup/selfhost.html">Selfhost</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/shortcuts.html">Shortcuts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="personal/subscriptions.html">Subscriptions</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="react/index.html">React</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="react/binding.html">Binding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="react/lifecycle.html">Lifecycle</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="react/redux-sideeffects.html">Redux Sideeffects</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="react/redux.html">Redux</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="react/testing.html">Testing</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/index.html">Software Development</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/computer-architecture/index.html">Computer Architecture</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/computer-architecture/memory.html">Memory</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/oops/index.html">Oops</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/oops/abstraction.html">Abstraction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/oops/bank-uml.html">Banl UML</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/oops/shopping-cart-uml.html">Shopping cart UML</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/uml/index.html">Uml</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/uml/UML-class-library.html">Library UML</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/uml/UML-class-restaurant.html">Restaurant UML</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/uml/assets/index.html">Assets</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="software-development/uml/uml-class.html">UML Concepts</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sql/index.html">Sql</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sql/basics.html">Basics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sql/joins.html">Joins</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/index.html">System Design</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/availability-vs-consistency-pattern.html">Availability vs Consistency</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/basics.html">Basics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/database.html">Database</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);

