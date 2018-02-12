QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "sun - the first agrument is 'truthy', so we pass!");
    assert.ok(1 <="4"," - the first agrument is 'truthy', so we pass!")
    assert.ok(1 <="4","1<3 - the first agrument is 'truthy', so we pass!")
});

QUnit.test('Testing  number with no input', function (assert) {
    assert.throws(function() { test(NaN) }, 'given input is  not a valid number');
});
QUnit.test('Testing  number with alphabet ', function (assert) {
    assert.throws(function() { test(null) }, 'given input is not a  valid number');
});
QUnit.test('Testing  number with positive numbers ', function (assert) {
    assert.throws(function() { test("abc") }, 'Given is not a number');
});
QUnit.test('Testing  number with negative number', function (assert) {
    assert.throws(function() { test(undefined) }, 'Given is not a number');
});