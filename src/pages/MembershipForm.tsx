import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Send, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    spouseName: '',
    email: '',
    phone: '',
    fullAddress: '',
    cityStateZip: '',
    membershipType: '',
    children: [] as { name: string; dob: string; gender: string }[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleChildChange = (index: number, field: string, value: string) => {
    const updatedChildren = [...formData.children];
    updatedChildren[index][field as keyof typeof updatedChildren[0]] = value;
    setFormData({ ...formData, children: updatedChildren });
  };

  const addChild = () => {
    setFormData({
      ...formData,
      children: [...formData.children, { name: '', dob: '', gender: '' }],
    });
  };

  const removeChild = (index: number) => {
    const updatedChildren = formData.children.filter((_, i) => i !== index);
    setFormData({ ...formData, children: updatedChildren });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      spouseName: formData.spouseName,
      email: formData.email,
      phone: formData.phone,
      fullAddress: formData.fullAddress,
      cityStateZip: formData.cityStateZip,
      membershipType: formData.membershipType,
      children: formData.children
        .map(child => `${child.name} (${child.gender}, ${child.dob})`)
        .join(', '),
    };

    emailjs
      .send(
        'service_nwsw6vd',     // ⬅️ Replace this
        'template_vbz9b3f',    // ⬅️ Replace this
        templateParams,
        'tcrEt3k1ti2NzxTg3'      // ⬅️ Replace this
      )
      .then(() => {
        alert('Membership application submitted successfully!');
        // Optional: clear the form
        setFormData({
          fullName: '',
          spouseName: '',
          email: '',
          phone: '',
          fullAddress: '',
          cityStateZip: '',
          membershipType: '',
          children: [],
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen pt-28 pb-16" style={{ marginTop: '2rem' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 mt-5">
          <Link to="/membership">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2"/>
              Back to Membership
            </Button>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-kerala-blue mb-2">Membership Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="space-y-4">
                <Label>Full Name *</Label>
                <Input name="fullName" required value={formData.fullName} onChange={handleInputChange} />

                <Label>Spouse Name (if applicable)</Label>
                <Input name="spouseName" value={formData.spouseName} onChange={handleInputChange} />

                <Label>Email Address *</Label>
                <Input name="email" type="email" required value={formData.email} onChange={handleInputChange} />

                <Label>Phone Number *</Label>
                <Input name="phone" required value={formData.phone} onChange={handleInputChange} />

                <Label>Full Address *</Label>
                <Input name="fullAddress" required value={formData.fullAddress} onChange={handleInputChange} />

                <Label>City, State, ZIP Code *</Label>
                <Input name="cityStateZip" required value={formData.cityStateZip} onChange={handleInputChange} />
              </div>

              {/* Membership Type */}
              <div>
                <h3 className="text-xl font-semibold text-kerala-blue mb-4">Membership Type</h3>
                <Select onValueChange={(value) => handleSelectChange('membershipType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Membership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Membership - $50/year</SelectItem>
                    <SelectItem value="family">Family Membership - $75/year</SelectItem>
                    <SelectItem value="senior">Senior Membership - $30/year</SelectItem>
                    <SelectItem value="student">Student Membership - $25/year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Children Info */}
              <div>
                <h3 className="text-xl font-semibold text-kerala-blue mb-4">Children Information</h3>
                <p className="text-sm text-gray-600 mb-2">Add child details (if applicable)</p>
                {formData.children.map((child, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-4">
                    <Input
                      placeholder="Child's Name"
                      value={child.name}
                      onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                    />
                    <Input
                      type="date"
                      value={child.dob}
                      onChange={(e) => handleChildChange(index, 'dob', e.target.value)}
                    />
                    <Select
                      value={child.gender}
                      onValueChange={(value) => handleChildChange(index, 'gender', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="button" variant="destructive" onClick={() => removeChild(index)}>
                      <X className="w-4 h-4" /> Remove
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addChild}>
                  <Plus className="w-4 h-4 mr-2" /> Add Another Child
                </Button>
              </div>

              {/* Submit */}
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex justify-center items-center px-6 py-4 bg-gradient-to-r from-[#2b5797] to-[#1b365d] text-green-600 font-semibold rounded-2xl shadow-lg hover:opacity-90 transition duration-200"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MembershipForm;
