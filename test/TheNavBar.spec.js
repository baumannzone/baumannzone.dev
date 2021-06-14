import { shallowMount } from '@vue/test-utils'
import TheNavBar from '@/components/TheNavBar.vue'

describe('TheNavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(TheNavBar, {
      stubs: {
        NuxtLink: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
