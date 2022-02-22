import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils'
import Alllocations from '@/views/Alllocations.vue'
const localVue = createLocalVue();
localVue.use(Vuex);

describe('Alllocations.vue', () => {

    it('calls the all action correctly', () => {
        const loginMock = jest.fn(() => Promise.resolve());
        const store = new Vuex.Store({
            actions: {
                // mock function
                login: loginMock
            }
        });
        const wrapper = mount(LoginForm, { localVue, store });
        wrapper.find('button').trigger('click');
        expect(loginMock).toHaveBeenCalled();
    });
});