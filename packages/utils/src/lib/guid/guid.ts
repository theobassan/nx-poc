import { v4 } from 'uuid';

function guid(): string {
    return v4();
}

export default guid;
