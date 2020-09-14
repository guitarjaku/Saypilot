import { h } from "preact";
import { useState } from "preact/hooks";
import { Row, Col, Input } from "antd";
import { IdcardOutlined } from "@ant-design/icons";
import style from "./style.css";

const { TextArea } = Input;

const EditCapain = () => {
  const [form, setForm] = useState({});

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <h1 style={{ textAlign: "center", color: "#fff" }}>EditCapaign</h1>
          <Row>
            <Col span={24}>
              <p>Name your campaign</p>
              <Input
                style={{
                  border: 0,
                  color: "#fff",
                  backgroundColor: "#010001",
                  borderBottom: "0.2px solid #fff",
                }}
                suffix={<IdcardOutlined />}
              />
            </Col>
          </Row>
          <Row>
            <div style={{ height: "300px" }}></div>
          </Row>
          <Row>
            <Col span={12}>
              <p>Product Website</p>
            </Col>
            <Col span={12}>
              <p>Product value in dollars</p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Row>
                <Col>
                  <p>Product Category</p>
                  <p>Select One</p>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col>
                  <p>Product Category</p>
                  <p>Brand must provide over $175 to warrant 2 posts.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Input
                style={{
                  color: "#FFB917",
                  backgroundColor: "#151315",
                  border: "0.2px solid #FFB917",
                }}
              />
            </Col>
            <Col span={12}>
              <Input
                style={{
                  color: "#FFB917",
                  backgroundColor: "#151315",
                  border: "0.2px solid #FFB917",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h1>General Post Guidelines</h1>
              <p>
                Give them a general understanding of what you're looking for and
                have faith in their creative minds to come up with content that
                connects with their audience. After all,there followers follow
                them for a reason!
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>Which products will you send the influencers?</p>
              <Input
                style={{
                  color: "#FFB917",
                  backgroundColor: "#151315",
                  border: "0.2px solid #FFB917",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                What would you like the influencers to mention in their caption?
              </p>
              <TextArea
                rows={4}
                style={{
                  color: "#FFB917",
                  backgroundColor: "#151315",
                  border: "0.2px solid #FFB917",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>What photo/video style are you looking for?</p>
              <TextArea
                rows={4}
                style={{
                  color: "#FFB917",
                  backgroundColor: "#151315",
                  border: "0.2px solid #FFB917",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Style Guide</p>
              <p>
                Add images so the creators know what kind of content to create
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>What are you looking for in your first post?</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Instagram Story Required?</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Enter Traget States</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Gender</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Brand Tags and Hash Tags</p>
              <p>
                Make influencers include your brands Instagram handle with their
                posts. This way audience members will have a clear path to visit
                your page. add required hashtags to drive people help your posts
                be discovered by people searching for specific themes (ex.
                #headlthysnack, #feelinggood, #newyearnewyou )
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>Required Instagram Handles</p>
              <p>Press "Enter"after each handle</p>
              <Input
                prefix="@"
                style={{
                  border: 0,
                  color: "rgb(118 118 118)",
                  backgroundColor: "#010001",
                  borderBottom: "0.2px solid rgb(118 118 118)",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span style={{ backgroundColor: "#151315" }}>@newshine</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Required Hashtags (Max 5)</p>
              <p>Press "Enter"after each tag</p>
            </Col>
            <Input
              prefix="#"
              style={{
                border: 0,
                color: "rgb(118 118 118)",
                backgroundColor: "#010001",
                borderBottom: "0.2px solid rgb(118 118 118)",
              }}
            />
          </Row>
          <Row>
            <Col>
              <p>Show this listing to VIP Influencers?</p>
              <p>(VIP creators cost 2 campaign credits)</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                VIP Influencers are our best of the best influencers. They have
                a combination of amazing content skills, a very engaged
                audience, and a sizeable following. You can always add more VIP
                influencers credits to your plan from the dashboard.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Connect to a Yotpo Product ID</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Enter a yotpo product ID to be able to automatically send your
                content over to a specific Folder in your Yotpo account.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Product Folder (optional)</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EditCapain;
