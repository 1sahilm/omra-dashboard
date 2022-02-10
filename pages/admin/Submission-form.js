import React from "react";

// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    CardBody,
    FormGroup,
  Form,
  Input,
  Col,
  Button,
  } from "reactstrap";

  import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";


function Submission() {
    return(
        <>
         {/* <Header /> */}
         <div className="bg-theme-clr pb-8 pt-5 pt-md-8">
         <Container className="">
             <div className="col text-center text-white">
                 <h1>Submission form</h1>
             </div>
         </Container>
         </div>
         
        <Container>
            <Row>
                <div className="col">
                    <Card className="bg-secondary shadow">
                    <CardHeader className="border-0 bg-white">
                        <CardBody>
                <h3 className="mb-4 text-center">User Information</h3>
                <Container className="mt-4" fluid>
                    <Row>
                    <Form  className="submission-form-field">
                  <div className="">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Name:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            placeholder="Enter Your Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Date:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Total Number Of Calls:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="5"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Total Business Connected :	

                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="22"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Total Catalouge Created	:
	

                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Cataloge"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Doc iD 1:	

                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Doc id"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Busineness name :	


                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="Business Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted text-center mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                  <Button color="warning" type="button">
        Submit
      </Button>
      </div>
                </Form>
                    </Row>
                </Container>
                </CardBody>
              </CardHeader>
                    </Card>

                </div>
            </Row>
        </Container>
        </>
    );
}

Submission.layout = Admin;

export default Submission;