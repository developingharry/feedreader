# Feed Reader Test

## Introduction

> A test suite for an RSS Feed reader, developed with Jasmine's behaviour-driven development framework.


## Code Samples

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

## Installation

> Open index.html in your browser to run the tests.
