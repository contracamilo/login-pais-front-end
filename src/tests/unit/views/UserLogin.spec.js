import { mount } from '@vue/test-utils';
import UserLogin from '@/components/UserLogin.vue';
import axios from 'axios';

jest.mock('axios');

describe('UserLogin.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UserLogin);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('shows an error message when login fails', async () => {
    axios.post.mockRejectedValueOnce(new Error('Error al intentar iniciar sesión.'));
    await wrapper.vm.login();
    expect(wrapper.vm.errorMessage).toBe('Error al intentar iniciar sesión.');
  });

  it('navigates to register page when "crea una cuenta" is clicked', () => {
    wrapper.vm.goToRegisterUser();
    expect(wrapper.vm.$route.name).toBe('register');
  });

  it('navigates to profile page when "Ingresar" is clicked', () => {
    wrapper.vm.goToProfile();
    expect(wrapper.vm.$route.name).toBe('user-profile');
  });
});