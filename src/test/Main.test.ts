// src/test/Main.test.ts
import {Fun} from '../app/Main'

describe('Main test suite', () => {

    // 해당 describe테스트에서 아래만 제외한다.
    test('first test', () => {
        console.log('test work!!!')
        const str = Fun.toUpperC('str');
        expect(str).toBe('STR'); // Fun.toUpper의 결과가 문자열 STR 이어야 한다
    });

    test('parse URL', () => {
        const url : string = 'http://localhost:3000/signup';
        const port : string = url.split('localhost:')[1].split('/')[0];
        const protocol : string = url.split('//')[0];
        const parseUrl = Fun.parseUrl(url);
        expect(parseUrl.href).toBe(url)
        expect(parseUrl.port.toString()).toBe(port)
        expect(parseUrl.protocol).toBe(protocol)
        expect(parseUrl.query).toEqual({})
    })

    test('parse URL with Query', () => {
        const url  = Fun.parseUrl('http://localhost:3000/signup?username=alex&nickname=super');
        const query : object = {
            username : 'alex',
            nickname : 'super'
        }

        expect(url.query).toEqual(query)
    })


    // 추가 테스트 케이스 작업에 대한 메모
    test.todo("추가되는 코드에 대한 테스트 케이스 작성!!!")

    test('test invalid URL', () => {
        // expectError함수로 감싸서 에러를 확인한다
        // function expectError(){
        //     Fun.parseUrl('')
        // }
        expect(() => {// Arrow Function을 이용하여 expect안에 실행해서 에러를 검출할수 있다.
            Fun.parseUrl('')
        }).toThrowError('url is empty')
    })

    // try, catch문을 이용하거 에러를 검출하고 검증한다.
    test('test invalid URL with try and catch', () => {
        try{
            Fun.parseUrl('');
        } catch (err){
            expect(err).toBeInstanceOf(Error)
            expect(err).toHaveProperty('message', 'url is empty')
        }
    })
})

