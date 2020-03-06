import { mount, createLocalVue } from '@vue/test-utils';
import App from '../src/App.vue';
import { assert } from 'chai';

const localVue = createLocalVue();

describe('first test', function(){
  this.timeout(20000);

  it('should show Hello, Daisy', () => {
    const wrapper = mount(App, { localVue });
    assert.include(wrapper.text(), 'Hello, Daisy');
  })

  it('should show Daisy, then Buffy', async () => {
    const wrapper = mount(App, { localVue });
    
    assert.include(wrapper.text(), 'Daisy');

    const but = wrapper.find('#but');
    but.trigger('click');

    await localVue.nextTick();

    assert.include(wrapper.text(), 'Buffy');
  })
})