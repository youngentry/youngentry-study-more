class Unit:
    def __init__(self):
        print("Unit 생성자")

class Flyable:
    def __init__(self):
        print("Flyable 생성자")

class FlyableUnit(Unit, Flyable):
    def __init__(self):
        #super().__init__() # 맨 처음 상속받는 class 여기서는 "Unit" 에 대해서만 __init__ 함수가 호출되므로 다중 상속이 불가능
        Unit.__init__(self)
        Flyable.__init__(self) # 다중 상속을 받으려면 두 번 이용해서 호출

# 드랍쉽
dropship = FlyableUnit() # 결과값 = Unit 생성자 = super() 로 맨 처음 상속받는 Unit