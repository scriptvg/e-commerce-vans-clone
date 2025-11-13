import React from 'react'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

function LoyaltyForm() {
  return (
    <form action="" className=''>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>
            Get in the Vans Family
          </FieldLegend>
          <FieldDescription>
            Earn and redeem points on  purchases and unlock your next reward.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel>
                Sign In or Sign Up <span className='text-red-600'>*</span>
              </FieldLabel>
              <Input placeholder='Email' />
              <FieldDescription>
                Example: jhondoe@email.com
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Button className='w-full' type="submit">Continue</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default LoyaltyForm
