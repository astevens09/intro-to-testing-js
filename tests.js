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
  it('should return false', function(){
    expect(isFive('5')).toBe(false);
  });
});

//Unit test for isEven function
describe('isEven', function(){
  it('should be a defined fuction', function(){
    expect(typeof isEven).toBe('function');
  });
  it('should return a boolean',function(){
    expect(typeof isEven()).toBe('boolean');
  });
  it('should return true when 2 passed in', function(){
    expect(isEven(2)).toBe(true);
  });
  it('should return true when -4 passed in', function(){
    expect(isEven(-4)).toBe(true);
  });
  it('should return false when 3 passed in', function(){
    expect(isEven(3)).toBe(false);
  });
  it('should return false when banana passed in', function(){
    expect(isEven('banana')).toBe(false);
  });
  it('should return true when "8" passed in', function(){
    expect(isEven('8')).toBe(true);
  });
  it('should return false when Infinity passed in', function(){
    expect(isEven(Infinity)).toBe(false);
  });
  it('should return false when boolean(true) is passed in', function(){
    expect(isEven(true)).toBe(false);
  });it('should return false when boolean(false) is passed in', function(){
    expect(isEven(false)).toBe(false);
  });
  it('should return false when called as isEven() ', function(){
    expect(isEven()).toBe(false);
  });
});

//Unit test for isVowel function
describe('isVowel',function(){
  it('should be a type of function',function(){
    expect(typeof isVowel).toBe('function');
  });
  it('should return a boolean type',function(){
    expect(typeof isVowel()).toBe('boolean');
  });
  it('should return true if "a" passed in',function(){
    expect(isVowel("a")).toBe(true);
  });
});
