import "reflect-metadata";

// Create a test decorator
function TestDecorator(params?: any) {
    return function (target: any) {
        console.log("TestDecorator called");
        if (params) {
            console.log("Params: ", params);
        }
    }
}

// Create a test class
@TestDecorator({
    name: "Luciano",
    status: "Refutado",
    sentimento: "Infeliz",
    observacao: "Não é possível fazer isso" 
})
class TestClass {
    testMethod() {
        console.log("testMethod called");
    }
}

const testClass = new TestClass();
testClass.testMethod();
