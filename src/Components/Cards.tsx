import React from 'react'
import {Button , Divider , Box} from '@mui/material'
import img from '../Img/img2.jpg'
const Cards = () => {
  return (
    <>
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '25px',
          paddingBlock: '10px',
        }}
      >
        {Array.from(new Array(20).fill('')).map((item, index) => (
          <Box
            className="hoverCards"
            key={index}
            style={{
              borderRadius: '4px',
              border: '1px solid #fff',
              marginBlock: '10px',
              transition:
                'transform .3s cubic-bezier(.215,.61,.355,1)',
              padding: '10px',
            }}
          >
            <img width={252} alt="" src={img} height={150} />
            <div
              style={{
                width: '250px',
              }}
            >
              <div
                style={{
                  fontSize: '17px',
                  fontWeight: '500',
                  paddingTop: '10px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Hong Kong ka Hotel Hue pagal diwana
              </div>
            </div>
            <span
              style={{
                display: 'flex',
                fontSize: '10px',
                padding: '5px 0',
                color: 'grey',
              }}
            >
              Burgers, Biryani, American, Snacks, Fast Food
            </span>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  background: '#48c479',
                  color: 'white',
                  borderRadius: '4px',
                  width: '3rem',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  display: 'flex',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '-4px',
                  }}
                >
                  &#9734;
                </span>
                <span style={{ fontSize: '12px', fontWeight: '500' }}>
                  4.0
                </span>
              </div>
              <div style={{ color: 'grey' }}>•</div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#535665',
                  fontWeight: '500',
                }}
              >
                38 MINS
              </div>
              <div style={{ color: 'grey' }}>•</div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#535665',
                  fontWeight: '500',
                }}
              >
                ₹1500 FOR TWO
              </div>
            </div>
            <Divider style={{ marginTop: '12px' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '5px 0',
              }}
            >
              <Button size="small" variant="text">
                Qucik View
              </Button>
            </div>
          </Box>
        ))}
      </div>
    </>
    </>
  )
}

export default Cards