import React from 'react'
import {useState} from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    isTrue?: boolean;
    num?: number;
    fn?: () => void;
    fn2?: (str: string) => string;
    obj?: {
        key1: string;
        key2: boolean;
    };
    obj2: Person;
}

interface TextNode {
    text: string
}

const TextField: React.FC<Props> = () => {

    // useState can be Number OR Null OR Undefined OR String
    const [count, setCount] = useState<number | null | undefined | string>(5);

    // useState has to be String. With default text of 'hello
    const [greeting, setGreeting] = useState<{ text: string }>({ text: 'hello'});

    // useState has to be String from Interface. With default text of 'hello
    const [greeting2, setGreeting2] = useState<TextNode>({ text: 'hello'});

    setCount(12)
    setGreeting('Hi')
    setGreeting2({text})

    return (
        <div>
            

        </div>
    )
}

export default TextField
