import React, { Component } from "react";

export default class Upload extends Component {
    render() {
        return (
            <div className="outer">
      
        <div className="inner">
            <form>

                <h3>Upload Your Prescription Below</h3>
                <p>Please upload an image of your medical prescription issued by a SLMC registered doctor. </p>

                <p>Prescription drugs will only be issued if a valid prescription image is provided.</p>

                <hr/>

                   

                <div className="form-group">
                    <label>Enter the prescription items and qty.<br/> <br/> Eg : Amoxillin 5mg – 10 Qty / Amoxillin 10mg – 10 Qty</label><br/>
                    <textarea rows="4" cols="50" name="description" id="description"></textarea> <br/>  
                    <label>Upload prescription File.</label><br/>

                    <input type="file"  placeholder="Upload Your Prescription Here" />
                </div>

                <div class="field text required" id="payment_options">
                <label class="label" for="payment"><span>Payment Options</span></label>
                <select id="payment" name="payment" class="form-control select-dropdown">
                    
                        <option value="0">
                            Card Payment                        </option>
                                    </select>
            </div>
            <div>
            <br/><button type="submit" class="action save primary" title="Submit Prescription"><span>Submit Prescription</span></button>
            </div>

                
            </form>
            </div>
            </div>
        );
    }
}