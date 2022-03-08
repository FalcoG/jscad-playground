import { primitives, hulls, transforms } from '@jscad/modeling'

const main = () => {
    const sphere = primitives.sphere({ radius: 1, center: [0, 0, 0] })
    const sphere2 = primitives.sphere({ radius: 1, center: [2, 3, 0] })

    let object = hulls.hull(sphere, sphere2)
    object = transforms.translateY(5, object)

    const macbook = primitives.roundedCuboid({
        size: [34.93, 1.55, 24.07],
        roundRadius: 0.1}
    )

    return [object, macbook]
}

export { main }
