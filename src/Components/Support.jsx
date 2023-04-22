import { Box, Image, Text, Input, Button } from "@chakra-ui/react";
import React from "react";
import invite from "../asset/invite.svg";
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from "react-icons/bs";
import "./footer.css"

export const Support = () => {
  return (
    <Box>
      <hr
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #f5b0b0",
        }}
      />

      <Box w="80%" m="auto" mt="1rem" p="1rem" lineHeight="60px">
        <Box
          border="none"
          borderBottom="1px solid"
          display="flex"
          alignItem="center"
        >
          <Image src={invite} />{" "}
          <Text fontSize="2xl" color="teal" as="i">
            Invite Partner
          </Text>{" "}
        </Box>
        <Input
          placeholder="Partner Email Id"
          border="none"
          borderBottom="1px solid"
        />
        <Box display="flex" justifyContent="space-between">
          <Button
            bg="white"
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            color="gray"
            w="45%"
            borderRadius="none"
            p="1.5rem"
          >
            Cancel
          </Button>
          <Button
            colorScheme="twitter"
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            w="45%"
            borderRadius="none"
            p="1.5rem"
          >
            Invite
          </Button>
        </Box>
      </Box>

      <hr
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #f5b0b0",
        }}
      />
      <Box textAlign="center" p="1rem">
        <Text
          fontSize="4xl"
          color="teal"
          as="i"
          fontWeight="700"
          fontFamily="Rubik"
        >
          Need Support
        </Text>
        <Text fontSize="18px">Discuss with our Wedding Support Team</Text>
      </Box>
      <hr
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #f5b0b0",
        }}
      />

      <Box  display={{base:"block" , sm:"block" ,md:"flex"}} mt="1rem" justifyContent="space-around">
        <Box  w={{base:"100%" , sm:"100%" , md:"40%"}}>
          <Box p="1rem" h="300px">
            <Text textAlign="center" mb="1rem" fontSize="20px">
              Book your consultant (999/-) fee
            </Text>
            <hr />
            <Text fontSize="20px" color="gray">
              Book a consultation from our expertise in wedding photography to
              your home. Doorstep Visit Quality cheque of products Satisfaction
              in any FAQ, query or problem
            </Text>
          </Box>
          <Button
            bg="blue.600"
            w="100%"
            borderRadius="none"
            borderBottomRadius="20px"
            h="60px"
            fontSize="20px"
            color="white"
          >
            Continue
          </Button>
        </Box>
        <Box  w={{base:"100%" , sm:"100%" , md:"40%"}}>
          <Box p="1rem" h="300px">
            <Text textAlign="center" mb="1rem" fontSize="20px">
              Plane your wedding
            </Text>
            <hr />
            <Text mt="1rem" fontSize="20px" color="gray">
              Let' s plan your wedding for photography with our special
              storytelling team. Get more ideas Live Samples and BTS discussion
              Consulting help in Make up artist, destination wedding, wedding
              story
            </Text>
          </Box>

          <Button
           bg="blue.600"
            w="100%"
            borderRadius="none"
            borderBottomRadius="20px"
            h="60px"
            fontSize="20px"
           color="white"
          >
            Continue
          </Button>
        </Box>
      </Box>


<Box className="lastSecond-container pt-3 pb-5">
        <h1 className="bookTop">Want to have your personalized photobook?</h1>
        <button className="book-btn">Book a Photobook</button>
      </Box>
      <Box className="footer">
        <Box className="right-footer "></Box>
        <Box className="left-footer"></Box>
        <Box className="container-fluid">
          <Box className="row justify-content-center">


<Box w="90%" m="auto" display={{base:"block" , sm:"block" , md:"flex"}} justifyContent="space-between">
            <Box >
              <Text fontSize="5xl" color="white" as="i">Never miss a thing.</Text>
              <Box className="footer-email w-75">
                <input
                  className="form-control w-100 footer-rel-email"
                  type="email"
                  placeholder="Email Address"
                  aria-label="default input example"
                ></input>
                <p className="mb-0 subscribe">Subscribe</p>
              </Box>
              <h4 className="small-footer">Be in touch</h4>
              <Box className="contancts-footer" >
                <BsFacebook color="white" />
               <BsWhatsapp color="white" />
                <BsLinkedin color="white" />
                <BsYoutube color="white" />
               <BsInstagram color="white" />
              </Box>
            </Box>

            <Box >
              <h4 className="small-footer text-center">Never miss a thing.</h4>
              <Box className="d-flex justify-content-between">
                <Box>
                  <p className="small-text">Services</p>
                  <p className="small-text">Blog</p>
                  <p className="small-text">Portfolio</p>
                </Box>
                <Box>
                  <p className="small-text">Tutorial</p>
                  <p className="small-text">Careers</p>
                  <p className="small-text">Film</p>
                </Box>
              </Box>
            </Box>

            <Box >
              <h4 className="small-footer text-center">Never miss a thing.</h4>
              <Box className="d-flex justify-content-between">
                <Box>
                  <p className="small-text">Contact us</p>
                  <p className="small-text">Feedback</p>
                  <p className="small-text">FAQ</p>
                  <p className="small-text">Terms and conditions</p>
                  <p className="small-text">Privacy Policy</p>
                  <p className="small-text">Data Deletion Protocol</p>
                </Box>
              </Box>
            </Box>
</Box>


            <Box textAlign="center"  mt="5rem">
              <p className="small-text">
                2019-2021, FliqaIndia Pvt Ltd. <br /> -ALL RIGHT RESERVED
                POWERED BY FLIQAINDIA PVT. LTD.
                <br />
                VERSION 5.1.5
              </p>
            </Box>
          </Box>
        </Box>
        </Box>

    </Box>
  );
};
