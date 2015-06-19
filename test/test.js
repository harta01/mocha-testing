var assert = require("assert");
var should = require("should");

describe('Array', function() {
	describe('push()', function() {
		it('should append a value', function() {
			var arr = [];
			arr.push('foo');
			arr.push('bar');
			arr[0].should.equal('foo');
			arr[1].should.equal('bar');
		});
		it('should return the length', function() {
			var arr = [];
			var n = arr.push('foo');
			n.should.equal(1);
			var n = arr.push('bar');
			n.should.equal(2);
		});
		describe('with many arguments', function() {
			it('should add the values', function() {
				var arr = [];
				arr.push('foo', 'bar');
				arr[0].should.equal('foo');
				arr[1].should.equal('bar');
			});
		});
	});

	describe('unshift()', function() {
		it('should prepend a value', function() {
			var arr = [1, 2, 3];
			arr.unshift('foo');
			arr[0].should.equal('foo');
			arr[1].should.equal(1);
		});
		it('should return the length', function() {
			var arr = [];
			var n = arr.unshift('foo');
			n.should.equal(1);
			var n = arr.unshift('bar');
			n.should.equal(2);
		});
		describe('with many arguments', function() {
			it('should add the values', function() {
				var arr = [];
				arr.unshift('foo', 'bar');
				arr[0].should.equal('foo');
				arr[1].should.equal('bar');
			});
		});
	});
	describe('pop()', function() {
		it('should remove and return the last value', function() {
			var arr = [1, 2, 3];
			arr.pop().should.equal(3);
			arr.pop().should.equal(2);
			arr.pop().should.equal(1);
		});
	});
	describe('shift()', function() {
		it('should remove and return the first value', function() {
			var arr = [1, 2, 3];
			arr.shift().should.equal(1);
			arr.shift().should.equal(2);
			arr.should.have.length(1);
		});
	});
});
