/**
 * ✅ 템플릿 리터럴 타입
 *  : String Literal Type을 기반으로 정해진 패턴의 문자열만 포함하는 Template Literal Type
 */

type Color = "red" | "green" | "pink";
type Animal = "dog" | "cat" | "rabbit";

// 'red-dog','red-cat','red-rabbt','green-dog',....
type templateLiteralType = `${Color}-${Animal}`;

const testType: templateLiteralType = "green-cat";
