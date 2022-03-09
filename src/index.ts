import { primitives, hulls, transforms, extrusions } from '@jscad/modeling'
import { Geom3 } from '@jscad/modeling/src/geometries/types'

const main = (): Geom3 | Geom3[] => {
  const deviceDimensions: [number, number, number] = [34.93, 24.07, 1.55]
  const deviceScreenAngle = 120
  const sphere = primitives.sphere({ radius: 1, center: [0, 0, 0] })
  const sphere2 = primitives.sphere({ radius: 1, center: [2, 3, 0] })

  let object = hulls.hull(sphere, sphere2)
  object = transforms.translateY(5, object)

  // const device = primitives.roundedCuboid({
  //   size: deviceDimensions,
  //   roundRadius: 0.2
  // })

  const radAngle = (180 - deviceScreenAngle) * Math.PI / 180
  const stand = primitives.polygon({
    points: [
      [0, 0],
      [deviceDimensions[1], 0],
      [deviceDimensions[1] * Math.sin(radAngle), deviceDimensions[1] * Math.cos(radAngle)]
    ]
  })

  const stand3D = extrusions.extrudeLinear({ height: 3 }, stand)

  return [object, stand3D]
}

export { main }
