import {media, mediaWithBreakpoints, MediaBreakpoints} from '../media'

const customSizes: MediaBreakpoints = {
  mobile: 100,
  tablet: 200,
  desktop: 300
}

const customMedia = mediaWithBreakpoints(customSizes)

describe('media', () => {
  it('should have default mobile breakpoint', () => {
    const style = media.mobile`background: papayawhip;`
    expect(style).toMatchSnapshot()
  })

  it('should have default tablet breakpoint', () => {
    const style = media.tablet`background: papayawhip;`
    expect(style).toMatchSnapshot()
  })

  it('should have default desktop breakpoint', () => {
    const style = media.desktop`background: papayawhip;`
    expect(style).toMatchSnapshot()
  })

  it('should have custom mobile breakpoint', () => {
    const style = customMedia.mobile`background: papayawhip;`
    expect(style).toMatchSnapshot()
  })

  it('should have custom tablet breakpoint', () => {
    const style = customMedia.tablet`background: papayawhip;`
    expect(style).toMatchSnapshot()
  })

  it('should have custom desktop breakpoint', () => {
    const style = customMedia.desktop`background: papayawhip;`
    expect(style).toMatchSnapshot()
  })
})
