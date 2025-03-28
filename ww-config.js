export default {
  editor: {
    label: {
      en: 'Horizontal Bar Chart',
      pt: 'Gráfico de Barras Horizontal',
    },
    icon: 'fa fa-bar-chart',
    customStylePropertiesOrder: [
      'backgroundColor',
      'borderRadius',
      'barColor',
      'trackColor',
      'barHeight',
      'barBorderRadius',
    ],
  },
  properties: {
    // DATA CONFIGURATION
    data: {
      label: {
        en: 'Chart Data',
        pt: 'Dados do Gráfico',
      },
      type: 'Array',
      bindable: true,
      defaultValue: [
        { label: 'Anatomia', value: 87, color: '#4CAF50' },
        { label: 'Fisiologia', value: 70, color: '#66BB6A' },
        { label: 'Bioquímica', value: 65, color: '#81C784' },
        { label: 'Imunologia', value: 60, color: '#A5D6A7' },
        { label: 'Farmacologia', value: 55, color: '#C8E6C9' },
      ],
    },
    sortData: {
      label: {
        en: 'Sort Data',
        pt: 'Ordenar Dados',
      },
      type: 'OnOff',
      defaultValue: false,
    },
    sortAscending: {
      label: {
        en: 'Sort Ascending',
        pt: 'Ordenar Crescente',
      },
      type: 'OnOff',
      defaultValue: false,
    },

    // CHART APPEARANCE
    backgroundColor: {
      label: {
        en: 'Background Color',
        pt: 'Cor de Fundo',
      },
      type: 'Color',
      defaultValue: 'transparent',
    },
    borderRadius: {
      label: {
        en: 'Border Radius',
        pt: 'Raio da Borda',
      },
      type: 'Number',
      options: {
        min: 0,
        max: 24,
        step: 1,
      },
      defaultValue: 0,
    },

    // BAR STYLING
    barColor: {
      label: {
        en: 'Default Bar Color',
        pt: 'Cor Padrão da Barra',
      },
      type: 'Color',
      defaultValue: '#4CAF50',
    },
    trackColor: {
      label: {
        en: 'Track Color',
        pt: 'Cor da Trilha',
      },
      type: 'Color',
      defaultValue: '#f0f0f0',
    },
    barHeight: {
      label: {
        en: 'Bar Height',
        pt: 'Altura da Barra',
      },
      type: 'Number',
      options: {
        min: 10,
        max: 50,
        step: 1,
      },
      defaultValue: 30,
    },
    barBorderRadius: {
      label: {
        en: 'Bar Border Radius',
        pt: 'Raio da Borda da Barra',
      },
      type: 'Number',
      options: {
        min: 0,
        max: 20,
        step: 1,
      },
      defaultValue: 4,
    },

    // LABEL STYLING
    labelColor: {
      label: {
        en: 'Label Color',
        pt: 'Cor do Rótulo',
      },
      type: 'Color',
      defaultValue: '#333333',
    },
    labelFontSize: {
      label: {
        en: 'Label Font Size',
        pt: 'Tamanho da Fonte do Rótulo',
      },
      type: 'Number',
      options: {
        min: 8,
        max: 24,
        step: 1,
      },
      defaultValue: 14,
    },
    labelWidth: {
      label: {
        en: 'Label Width',
        pt: 'Largura do Rótulo',
      },
      type: 'Number',
      options: {
        min: 60,
        max: 200,
        step: 10,
      },
      defaultValue: 120,
    },

    // VALUE DISPLAY - GENERAL
    valueSuffix: {
      label: {
        en: 'Value Suffix',
        pt: 'Sufixo do Valor',
      },
      type: 'Text',
      defaultValue: '%',
    },
    valueFontSize: {
      label: {
        en: 'Value Font Size',
        pt: 'Tamanho da Fonte do Valor',
      },
      type: 'Number',
      options: {
        min: 8,
        max: 20,
        step: 1,
      },
      defaultValue: 12,
    },

    // VALUE IN BAR
    barValueColor: {
      label: {
        en: 'Bar Value Color',
        pt: 'Cor do Valor na Barra',
      },
      type: 'Color',
      defaultValue: '#ffffff',
    },

    // X-AXIS CONFIGURATION
    showAxis: {
      label: {
        en: 'Show X-Axis',
        pt: 'Mostrar Eixo X',
      },
      type: 'OnOff',
      defaultValue: true,
    },
    axisColor: {
      label: {
        en: 'Axis Color',
        pt: 'Cor do Eixo',
      },
      type: 'Color',
      defaultValue: '#666666',
    },
    axisFontSize: {
      label: {
        en: 'Axis Font Size',
        pt: 'Tamanho da Fonte do Eixo',
      },
      type: 'Number',
      options: {
        min: 8,
        max: 16,
        step: 1,
      },
      defaultValue: 10,
    },
    axisStep: {
      label: {
        en: 'Axis Step Size',
        pt: 'Intervalo do Eixo',
      },
      type: 'Number',
      options: {
        min: 5,
        max: 50,
        step: 5,
      },
      defaultValue: 20,
    },
    axisMax: {
      label: {
        en: 'Axis Maximum Value',
        pt: 'Valor Máximo do Eixo',
      },
      type: 'Number',
      options: {
        min: 50,
        max: 200,
        step: 10,
      },
      defaultValue: 100,
    },

    // TOOLTIP CONFIGURATION
    showTooltip: {
      label: {
        en: 'Show Tooltip',
        pt: 'Mostrar Tooltip',
      },
      type: 'OnOff',
      defaultValue: true,
    },
    tooltipBgColor: {
      label: {
        en: 'Tooltip Background',
        pt: 'Cor de Fundo do Tooltip',
      },
      type: 'Color',
      defaultValue: '#333333',
    },
    tooltipTextColor: {
      label: {
        en: 'Tooltip Text Color',
        pt: 'Cor do Texto do Tooltip',
      },
      type: 'Color',
      defaultValue: '#ffffff',
    },
    tooltipPrefix: {
      label: {
        en: 'Tooltip Prefix',
        pt: 'Prefixo do Tooltip',
      },
      type: 'Text',
      defaultValue: 'Taxa de acerto:',
    },
  },
};
