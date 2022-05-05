import { Badge, Card, Avatar, Button, Row, Col , Image} from 'antd'
import react, { useEffect, useState } from 'react'

const CatWishlistCard = () => {

const removeCat = (id) => {

}
    return (
        <>
            <Card style={{ height: 'fit-content', borderRadius: 10 }} hoverable>
                <Row align="middle" justify="space-between">
                    <Col span={8}>
                        <Image width={100} height={100} src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="" />
                    </Col>
                    <Col span={8}>
                        Name
                    </Col>
                    <Col span={8}>
                        <Button onClick={removeCat}>Remove</Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default CatWishlistCard