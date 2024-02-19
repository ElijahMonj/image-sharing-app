import React, { useRef } from 'react';

const Terms = () => {
    
  
    return ( 
        <dialog id="termsmodal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl" id='termstext'>
                <h3 className="font-bold text-lg" id="myAnchor">Terms and Conditions for Swiftsnap</h3>
                <p className="py-2">Welcome to our image sharing web app. These terms and conditions outline the rules and regulations for the use of our platform.</p>
                <p className="py-2">By accessing this web app, we assume you accept these terms and conditions. Do not continue to use this web app if you do not agree to all of the terms and conditions stated on this page.</p>
                <h1 className="font-bold">1. License to Use</h1>
                <p className="py-2">1.1. We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our image sharing web app solely for personal and non-commercial purposes.</p>
                
                <p className="py-2">1.2. You agree not to reproduce, distribute, modify, or create derivative works from any content accessed through our web app without our prior written consent.</p>
                <h1 className="font-bold">2. User Content</h1>
                <p className="py-2">2.1. You retain ownership of any content you upload, post, or share on our web app.</p>
                
                <p className="py-2">2.2. By uploading, posting, or sharing content on our web app, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, modify, and display such content for the purpose of operating and improving our web app.</p>
                <p className="py-2">2.3. You are solely responsible for the content you upload, post, or share on our web app, and you agree not to upload, post, or share any content that violates applicable laws or infringes upon the rights of others.</p>

                <h1 className="font-bold">3. Prohibited Conduct</h1>
                <p className="py-2">3.1. You agree not to engage in any conduct that:
                    <ul className="ms-3">
                        <li>a. Violates any applicable laws or regulations.</li>
                        <li>b. Infringes upon the rights of others.</li>
                        <li>c. Harasses, threatens, or intimidates others.</li>
                        <li>d. Interferes with the operation of our web app.</li>
                        <li>e. Contains viruses or other malicious code.</li>
                        <li>f. Attempts to gain unauthorized access to our web app or its systems.</li>
                    </ul>
                </p>
                <h1 className="font-bold">4. Privacy</h1>
                <p className="py-2">4.1. We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.</p>
                <h1 className="font-bold">5. Intellectual Property Rights</h1>
                
                <p className="py-2">5.1. All intellectual property rights in our web app, including but not limited to copyrights, trademarks, and trade secrets, are owned by us or our licensors.</p>
                <h1 className="font-bold">6. Disclaimer of Warranties</h1>
                
                
                <p className="py-2">6.1. Our web app is provided on an `&#34;`as is`&#34;` and `&#34;`as available`&#34;` basis, without any warranties of any kind, either express or implied</p>
                <p className="py-2">6.2. We do not warrant that our web app will be uninterrupted or error-free, or that any defects will be corrected.</p>
                <h1 className="font-bold">7. Limitation of Liability</h1>
                <p className="py-2">7.1. To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our web app.</p>
                
                <h1 className="font-bold">8. Changes to Terms and Conditions</h1>
                <p className="py-2">8.1. We reserve the right to update or modify these terms and conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page.</p>

                <h1 className="font-bold">9. Governing Law</h1>
                <p className="py-2">9.1. These terms and conditions shall be governed by and construed in accordance with the laws of the PHilippines, without regard to its conflict of law principles.</p>
                
                <p className="my-2">By using our web app, you agree to abide by these terms and conditions. If you have any questions or concerns about these terms and conditions, please contact us at <strong>monjardinelijah120gmail.com</strong></p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm">Ok</button>
                </form>
                </div>
            </div>
            </dialog>
     );
}
 
export default Terms;