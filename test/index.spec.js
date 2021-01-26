import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Logo', () => {
  // #A001 想定のHTMLがレンダリングされること      
  test('is a Vue instance', () => {
    //   ShallowMount will mount component without lower tree
    const wrapper = mount(Index)
    expect(wrapper.html()).toContain('v-row')
  })
})
