import { primitives, extrusions, utils } from '@jscad/modeling'
import { Geom3 } from '@jscad/modeling/src/geometries/types'
import { Vec3 } from '@jscad/modeling/src/maths/types'

const main = (): Geom3 | Geom3[] => {
  const deviceDimensions: Vec3 = [34.93, 24.07, 1.55]
  const deviceScreenAngle = 120
  const tilt = 35

  const device = primitives.roundedCuboid({
    size: deviceDimensions,
    roundRadius: 0.2,
    center: [deviceDimensions[0] / 2, deviceDimensions[1] / 2, 0]
  })

  const top = 180 - deviceScreenAngle
  const standAngle = top - tilt
  const stand = primitives.triangle({
    type: 'ASA',
    values: [
      utils.degToRad(standAngle),
      deviceDimensions[1],
      utils.degToRad(90 - standAngle)
    ]
  })

  const stand3D = extrusions.extrudeLinear({ height: 3 }, stand)

  return [device, stand3D]
}

export { main }
