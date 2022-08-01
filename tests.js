// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for the sayHello function
describe('sayHello', function(){
  it('should be a defined function', function(){
    expect(typeof sayHello).toBe('function');
  });
  it('should return a string when called',function(){
    expect(typeof sayHello()).toBe('string');
  });
  it('should return Hello, Jane!',function(){
    expect(sayHello('Jane')).toBe('Hello, Jane!');
  });
  it('should return Hello, Alex!', function(){
    expect(sayHello('Alex')).toBe('Hello, Alex!');
  });
  it('should return Hello, Pat!',function(){
    expect(sayHello('Pat')).toBe('Hello, Pat!');
  });
  it('should return Hello, World!',function(){
    expect(sayHello()).toBe('Hello, World!');
  });
  it('should return Hello, World!', function(){
    expect(sayHello(true)).toBe('Hello, World!');
  });
  it('should return Hello, World!', function(){
    expect(sayHello(false)).toBe('Hello, World!');
  });

});

//Unit test for the isFive funciton
describe('isFive',function(){
  it('should be a defined function', function(){
    expect(typeof isFive).toBe('function');
  });
  it('should return a boolean', function(){
    expect(typeof isFive()).toBe('boolean');
  });
  it('should return true if 5 is passed in', function(){
    expect(isFive(5)).toBe(true);
  });
  it('should be a defined function', function(){
    expect(isFive('5')).toBe(false);
  });
});
