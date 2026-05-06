'use client';

import { Grid } from '@mantine/core';
import LabeledSegmentedControl from '../LabeledSegmentedControl/LabeledSegmentedControl';
import HoverCardInput from '@/components/Form/Inputs/HoverCardInput/HoverCardInput';
import { InputConfig } from '@/types/inputConfigs';
import {
  hexagonalCircumradiusInputConfig,
  keywayBoreDiameterInputConfig,
  keywayBoreDiameterPlusKeyHeightInputConfig,
  keywayKeyWidthInputConfig,
  radiusInputConfig,
} from './configs';
import { UseFormReturnType } from '@mantine/form';

type HoleType = 'none' | 'hexagonal' | 'circular' | 'keyway';

enum Hole {
  circular = "CIRCULAR",
  hexagonal = "HEXAGONAL",
  keyway = "KEYWAY",
  none = "NONE",
}

const holeTypeToHole: Record<HoleType, Hole> = {
  none: Hole.none,
  hexagonal: Hole.hexagonal,
  circular: Hole.circular,
  keyway: Hole.keyway,
};

const holeToInputs: Record<Hole, InputConfig[]> = {
  [Hole.circular]: [radiusInputConfig],
  [Hole.hexagonal]: [hexagonalCircumradiusInputConfig],
  [Hole.keyway]: [
    keywayBoreDiameterInputConfig,
    keywayBoreDiameterPlusKeyHeightInputConfig,
    keywayKeyWidthInputConfig,
  ],
  [Hole.none]: [],
};

const segmentedControlInputConfig = {
  InputComponent: LabeledSegmentedControl,
  inputProps: {
    name: "hole_type",
    label: "Hole Type",
    data: [
      { label: 'None', value: 'none' },
      { label: 'Hexagonal', value: 'hexagonal' },
      { label: 'Circular', value: 'circular' },
      { label: 'Keyway', value: 'keyway' },
    ]
  },
}

export function HoleTypeSelector({ form }: { form: UseFormReturnType<any> }) {
  const holeType = form.values.holeType as HoleType;
  const selectedHole = holeTypeToHole[holeType];
  const inputs = holeToInputs[selectedHole] || [];

  return (
    <>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        {/* Use input config */}
        <HoverCardInput
          {...segmentedControlInputConfig}
          inputProps={{
            ...segmentedControlInputConfig.inputProps,
            ...form.getInputProps('holeType'),
          }}
        />
      </Grid.Col>

      {inputs.map((inputConfig, index) => (
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <HoverCardInput
            {...inputConfig}
            inputProps={{
              ...inputConfig.inputProps,
              ...form.getInputProps(inputConfig.inputProps.name),
            }}
          />
        </Grid.Col>
      ))}
    </>
  );
}