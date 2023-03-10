import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Test username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Test username');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
