
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Send } from 'lucide-react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    membershipType: '',
    // Primary Member Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Professional Information
    occupation: '',
    employer: '',
    // Family Information (for family membership)
    spouseName: '',
    spouseDateOfBirth: '',
    spouseEmail: '',
    spousePhone: '',
    children: '',
    // Kerala Connection
    nativePlace: '',
    languagesSpoken: '',
    // Interests and Involvement
    volunteerInterests: '',
    specialSkills: '',
    previousAssociations: '',
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    communicationConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Membership application submitted:', formData);
    alert('Thank you for your membership application! We will review your application and contact you soon.');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/membership">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Membership
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-kerala-blue">Membership Application Form</CardTitle>
              <CardDescription className="text-lg">
                Join the KALAA community and become part of our Malayalam family
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Membership Type */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Membership Type</h3>
                  <Select onValueChange={(value) => handleSelectChange('membershipType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Membership - $50/year</SelectItem>
                      <SelectItem value="family">Family Membership - $75/year</SelectItem>
                      <SelectItem value="senior">Senior Membership - $30/year</SelectItem>
                      <SelectItem value="student">Student Membership - $25/year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Primary Member Information */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Primary Member Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Select onValueChange={(value) => handleSelectChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employer">Employer</Label>
                      <Input
                        id="employer"
                        name="employer"
                        value={formData.employer}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Family Information (show only for family membership) */}
                {formData.membershipType === 'family' && (
                  <div>
                    <h3 className="text-xl font-semibold text-kerala-blue mb-4">Family Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="spouseName">Spouse Name</Label>
                        <Input
                          id="spouseName"
                          name="spouseName"
                          value={formData.spouseName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="spouseDateOfBirth">Spouse Date of Birth</Label>
                        <Input
                          id="spouseDateOfBirth"
                          name="spouseDateOfBirth"
                          type="date"
                          value={formData.spouseDateOfBirth}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="spouseEmail">Spouse Email</Label>
                        <Input
                          id="spouseEmail"
                          name="spouseEmail"
                          type="email"
                          value={formData.spouseEmail}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="spousePhone">Spouse Phone</Label>
                        <Input
                          id="spousePhone"
                          name="spousePhone"
                          type="tel"
                          value={formData.spousePhone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="children">Children (Names and Ages)</Label>
                        <Textarea
                          id="children"
                          name="children"
                          value={formData.children}
                          onChange={handleInputChange}
                          placeholder="List children's names and ages"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Kerala Connection */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Kerala Connection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nativePlace">Native Place in Kerala</Label>
                      <Input
                        id="nativePlace"
                        name="nativePlace"
                        value={formData.nativePlace}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="languagesSpoken">Languages Spoken</Label>
                      <Input
                        id="languagesSpoken"
                        name="languagesSpoken"
                        value={formData.languagesSpoken}
                        onChange={handleInputChange}
                        placeholder="e.g., Malayalam, English, Hindi"
                      />
                    </div>
                  </div>
                </div>

                {/* Interests and Involvement */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Interests and Involvement</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="volunteerInterests">Areas of Interest for Volunteering</Label>
                      <Textarea
                        id="volunteerInterests"
                        name="volunteerInterests"
                        value={formData.volunteerInterests}
                        onChange={handleInputChange}
                        placeholder="e.g., Event planning, Cultural programs, Youth activities"
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialSkills">Special Skills or Talents</Label>
                      <Textarea
                        id="specialSkills"
                        name="specialSkills"
                        value={formData.specialSkills}
                        onChange={handleInputChange}
                        placeholder="e.g., Music, Dance, Arts, Technical skills"
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousAssociations">Previous Cultural Association Memberships</Label>
                      <Textarea
                        id="previousAssociations"
                        name="previousAssociations"
                        value={formData.previousAssociations}
                        onChange={handleInputChange}
                        placeholder="List any other Malayalam associations you've been part of"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="emergencyContactName">Contact Name *</Label>
                      <Input
                        id="emergencyContactName"
                        name="emergencyContactName"
                        required
                        value={formData.emergencyContactName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContactPhone">Contact Phone *</Label>
                      <Input
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        type="tel"
                        required
                        value={formData.emergencyContactPhone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContactRelation">Relationship *</Label>
                      <Input
                        id="emergencyContactRelation"
                        name="emergencyContactRelation"
                        required
                        value={formData.emergencyContactRelation}
                        onChange={handleInputChange}
                        placeholder="e.g., Spouse, Parent, Sibling"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div>
                  <h3 className="text-xl font-semibold text-kerala-blue mb-4">Agreements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleCheckboxChange('termsAccepted', checked as boolean)}
                      />
                      <Label htmlFor="termsAccepted" className="text-sm">
                        I agree to the KALAA Terms and Conditions and Constitution *
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) => handleCheckboxChange('privacyAccepted', checked as boolean)}
                      />
                      <Label htmlFor="privacyAccepted" className="text-sm">
                        I agree to the Privacy Policy and understand how my data will be used *
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="communicationConsent"
                        checked={formData.communicationConsent}
                        onCheckedChange={(checked) => handleCheckboxChange('communicationConsent', checked as boolean)}
                      />
                      <Label htmlFor="communicationConsent" className="text-sm">
                        I consent to receive communications from KALAA including event updates and newsletters
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-kerala-blue hover:bg-kerala-blue/90"
                    disabled={!formData.termsAccepted || !formData.privacyAccepted}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields must be completed
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
