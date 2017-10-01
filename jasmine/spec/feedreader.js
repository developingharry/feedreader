$(function() {

    // Tests of the RSS Feeds
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have a defined URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
        });

        it('...that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).not.toBe('');
            });
        });

        it('have a defined name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
        });

        it('...that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).not.toBe('');
            });
        });
    });

    // Tests of the menu functions
    describe('The menu', function() {

        //Variable assignment for the 'hamburger' button
        var menuButton = $('.menu-icon-link');

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it("appears and disappears when you click the hamburger", function() {
            //simulated click
            menuButton.click();
            //should no longer be hidden
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //and the same again in reverse
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //Tests of the initial entries
    describe('Initial Entries', function() {

        //load async function
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('leaves a single .entry element in the .feed container', function(done) {
            var feed = $('.feed');
            var entry = $('.entry');
            var entrySearch = document.querySelector(".feed").getElementsByClassName("entry").length;
            expect(entrySearch).toBeGreaterThan(0);
            done();
        });
    });

    //Tests of new feed functions
    describe('New Feed Selection', function() {

        //load async function
        var existingContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeedSelection = $('.feed').html;
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it("is populated with new content", function(done) {
            var newContent = $('.feed').html;
            expect(existingContent).not.toBe(newContent);
            done();
        });
    });
});
