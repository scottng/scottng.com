import React from "react"
import { AiFillCaretLeft } from "react-icons/ai";
 
function ProjectCryptography(props) {
  return (

    <div class="mx-auto pb-20 pt-10 p-10 space-y-3 max-w-4xl text-left">

      <a href="/">
        <div class="text-3xl bg-gray-100 hover:bg-gray-200 rounded-full w-20 text-center py-2"> <AiFillCaretLeft /> </div>
      </a>

      <div class="text-4xl font-medium">
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-700">Cryptography with Go</span> 
      </div>
      <div class="text-lg">
        Examples of symmetric and asymmetric encryption using Go's crypto package.<br />
        <span class="text-blue-700 hover:text-blue-500"><a href="https://github.com/scottng/cryptography-with-go">https://github.com/scottng/cryptography-with-go</a></span>
      </div>
      <div>
        <img src="/images/cryptography/demo.gif" alt="Program demo" />
        <div class="mx-auto text-md">
          Encryption and decryption with AES-CBC.
        </div>
      </div>

      <div class="text-3xl font-medium">
        About
      </div>
      <div>
      This repository contains programs that apply various cryptographic algorithms using Go's crypto package. Each Go file is a stand-alone command line program.

      These are programming exercises and are not meant to be used in any secure application.
      </div>

      <div class="text-3xl font-medium">
        Symmetric Encryption
      </div>
      <div class="text-xl font-medium">
        One time pad
      </div>
      <div>
      This program allows the user to encrypt and decrypt a message using one time pad.
      </div>
      <div>
      One time pad is a perfectly secure symmetric encryption scheme. In one time pad, each character of the plaintext is XORed with a character in a random key. The key must must be truly random. The key must also be the same size as the message and never reused. To generate a truly random key for one time pad, I used Go's crypto/rand package which provides a cryptographically secure random number generator.
      </div>

      <div class="text-xl font-medium">
        Advanced Encryption Scheme (AES)
      </div>
      <div>
        These programs allow the user to encrypt and decrypt messages of variable size using AES.
      </div>
      <div>
        AES is a symmetric block cipher. It is used in VPNs, mobile applications, web applications, etc. to protect sensitive data. AES supports block sizes of 128, 192, and 256 bits. The AES programs in this project use a block size of 128 bits. The AES implementation used is from Go's crypto/aes package. <br />
      </div>
      <div>
        Because AES is a block cipher, it can only encrypt a fixed amount of data. To encrypt data of arbitrary size, AES must be used along with a mode of operation. Go's crypto/cipher package provides several modes. In this project, I use CBC, CTR, and GCM modes from the crypto/cipher package. <br />
      </div>

      <div class="text-3xl font-medium">
        Asymmetric Encryption
      </div>
      <div class="text-xl font-medium">
        Public Key Encryption
      </div>
      <div>
      This program applies public key encryption to an arbitrary file using the RSA implementation provided by Go's crypto/rsa. It takes as input the path to a file, encrypts and decrypts it, and prints the encryption and decryption time. This was made to demonstrate one of the drawbacks of public key encryption: the slow speed of encryption of large files.
      </div>
      <div class="text-xl font-medium">
        Hybrid Encryption
      </div>
      <div>
        This program takes as input the path to a file, encrypts and decrypts it, and prints the encryption and decryption time. Compare the speed of hybrid key encryption with that of public key encryption.
      </div>
      <div class="text-xl font-medium">
        Digital Signatures
      </div>
      <div>
        This program takes as input the path to a file and outputs a digital signature and verification key on the file. This program can also verify a digital signature on a file.
      </div>
    </div>
  )
}
 
export default ProjectCryptography;