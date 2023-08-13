import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const SkeletonItem = ({ cards }) => {
    return (
        <Row xs={1} sm={2} lg={3} xl={4} xxl={5} className="g-4">
        {Array(cards).fill(0).map((card, index) => (
            <Col key={index}>
                <div key={index}>
                    <Skeleton count={1} height={380} />
                    <Skeleton count={3} height={50}  />
                </div>
            </Col>
        ))}
        </Row>
        )
}
