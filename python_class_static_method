from datetime import date
  
class Person:
    tuoi = 1
    def __init__(self, name, age):
        self.name = name
        self.age = self.tuoi
      
    # a class method to create a Person object by birth year.
    @classmethod
    def fromBirthYear(cls, name, year):
        return cls(name, date.today().year - year)
      
    # a static method to check if a Person is adult or not.
    @staticmethod
    def isAdult(age):
        return age > 18
 
    def isYoung(self):
        return "Young" if self.tuoi < 23 else "Old"

    def updateAge(self, age):
        self.tuoi = age
        self.age = age


   
person1 = Person('John Henry', 21)
person2 = Person.fromBirthYear('Mark Ken', 1996)

print (person1.name)
print (person1.age)
print (person1.isYoung())
person1.updateAge(30)
print (person1.age)

# print (person2.isYoung())
# print (person2.age)

# print (Person.isAdult(18))
# print (Person.isYoung())
